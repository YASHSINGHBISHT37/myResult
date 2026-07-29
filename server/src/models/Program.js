const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    code: String,
    name: String,
    credits: Number,
    type: String, // 'Theory' | 'Practical'
  },
  { _id: false }
);

const semesterSchema = new mongoose.Schema(
  {
    semester: Number,
    subjects: [subjectSchema],
  },
  { _id: false }
);

const pdfLinkSchema = new mongoose.Schema(
  {
    label: String,
    url: String,
  },
  { _id: false }
);

const programSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    school: { type: String, required: true },
    pdfLinks: [pdfLinkSchema],
    parsed: { type: Boolean, default: false }, // true once subjects/credits extracted
    semesters: [semesterSchema],
    rawSyllabusText: String,
  },
  { timestamps: true }
);

// Prevent duplicate entries for the same program under the same school
programSchema.index({ name: 1, school: 1 }, { unique: true });

module.exports = mongoose.model('Program', programSchema);