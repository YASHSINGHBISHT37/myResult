const { getCredits } = require('../utils/subjectCredits');

/**
 * GGSIPU StudentSearchProcess (euno=100) returns JSON:
 * {
 *   stprofile: { nrollno, stname, prgname, iname, yoa, ... },
 *   header: [...],
 *   stresult: [ [sem, code, name, internal, external, total, status, examDate, declaredDate], ... ]
 * }
 * "status" is the subject's grade point (e.g. "08" -> 8).
 */

function parseResultHtml(data) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.stresult)) {
    return {
      enrollmentNo: null,
      name: null,
      program: null,
      institute: null,
      yearOfAdmission: null,
      cgpa: null,
      semesters: [],
    };
  }

  const profile = data.stprofile || {};
  const enrollmentNo = profile.nrollno || null;
  const name = profile.stname ? profile.stname.trim() : null;
  const program = profile.prgname ? profile.prgname.trim() : null;
  const institute = profile.iname ? profile.iname.trim() : null;
  const yearOfAdmission = profile.yoa || null;

  const semesterMap = new Map();

  for (const row of data.stresult) {
    const [sem, code, subjName, internal, external, total, status] = row;
    const trimmedCode = (code || '').trim();

    const subject = {
      code: trimmedCode,
      name: (subjName || '').trim(),
      internal: internal === '-' ? 0 : parseFloat(internal) || 0,
      external: parseFloat(external) || 0,
      total: parseFloat(total) || 0,
      gradePoint: parseFloat(status) || 0,
      credits: getCredits(trimmedCode),
    };

    if (!semesterMap.has(sem)) {
      semesterMap.set(sem, []);
    }
    semesterMap.get(sem).push(subject);
  }

  const semesters = Array.from(semesterMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([sem, subjects]) => ({ semester: sem, subjects }));

  const allSubjects = semesters.flatMap((s) => s.subjects);
  const totalCredits = allSubjects.reduce((sum, s) => sum + s.credits, 0);
  const weightedSum = allSubjects.reduce((sum, s) => sum + s.credits * s.gradePoint, 0);
  const cgpa = totalCredits ? weightedSum / totalCredits : null;

  return { enrollmentNo, name, program, institute, yearOfAdmission, cgpa, semesters };
}

module.exports = { parseResultHtml };