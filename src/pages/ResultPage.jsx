import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import GradeSheetPDF from '@/utils/GradeSheetPDF'

export default function ResultPage() {
    const studentData = {
        name: 'Yash Singh Bisht',
        fatherName: 'Father Name',
        enrollment: '03990302024',
        program: 'BACHELOR OF COMPUTER APPLICATIONS',
        institute: 'INSTITUTE OF INNOVATION IN TECHNOLOGY & MANAGEMENT',
        yearSemester: 'FOURTH SEMESTER',
        admissionYear: 2024,
        examination: 'MAY, 2026',
        declaredDate: '15-Jul-2026',
        resultType: 'REGULAR',
        subjects: [
            { code: 'BCA-202T', name: 'OPERATING SYSTEMS', credit: 4, internal: 37, external: 51, total: 88, cs: 4, grade: 'A+', gp: 9 },
            { code: 'BCA-204T', name: 'SOFTWARE TESTING', credit: 4, internal: 40, external: 52, total: 92, cs: 4, grade: 'O', gp: 10 },
            { code: 'BCA-212T', name: 'INTRODUCTION TO DATA SCIENCE', credit: 4, internal: 32, external: 51, total: 83, cs: 4, grade: 'A+', gp: 9 },
            { code: 'BCA-222T', name: 'DIGITAL MARKETING', credit: 3, internal: 35, external: 57, total: 92, cs: 3, grade: 'O', gp: 10 },
            { code: 'BCA-232', name: 'INTRODUCTION TO LOGIC AND CRITICAL THINKING', credit: 2, internal: 38, external: 43, total: 81, cs: 2, grade: 'A+', gp: 9 },
            { code: 'BCA-234', name: 'HEALTH AND WELLNESS, YOGA EDUCATION AND SPORTS AND FITNESS', credit: 2, internal: '-', external: 92, total: 92, cs: 2, grade: 'O', gp: 10 },
            { code: 'BCA-202P', name: 'OPERATING SYSTEMS LAB', credit: 1, internal: 36, external: 44, total: 80, cs: 1, grade: 'A+', gp: 9 },
            { code: 'BCA-204P', name: 'SOFTWARE TESTING LAB', credit: 1, internal: 37, external: 47, total: 84, cs: 1, grade: 'A+', gp: 9 },
            { code: 'BCA-212P', name: 'DATA SCIENCE LAB', credit: 2, internal: 30, external: 46, total: 76, cs: 2, grade: 'A+', gp: 9 },
        ],
        currentCredits: 26,
        sgpa: 8.54,
        cumulativeCredits: 100,
        cgpa: 8.81,
    }

    return (
        <div className='flex flex-col gap-4'>

            {/* Live preview — automatically re-renders jab bhi code change ho */}
            <PDFViewer className='w-full h-[800px] border border-border rounded-xl'>
                <GradeSheetPDF studentData={studentData} />
            </PDFViewer>

            {/* Download button */}
            <PDFDownloadLink
                document={<GradeSheetPDF studentData={studentData} />}
                fileName={`${studentData.name}_Result.pdf`}
            >
                {({ loading }) => (
                    <button className='px-4 py-2 bg-[#84cc16] text-black rounded-lg font-semibold'>
                        {loading ? 'Preparing...' : 'Download PDF'}
                    </button>
                )}
            </PDFDownloadLink>

        </div>
    )
}