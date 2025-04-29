// frontend/src/services/subjectService.js
export const getAllSubjects = async () => {
    const response = await fetch('http://localhost:1313/api/subjects/');
    const data = await response.json();
    return data;
};

export const getSubjectById = async (id) => {
    const response = await fetch(`http://localhost:1313/api/subjects/${id}`);
    const data = await response.json();
    return data;
};

