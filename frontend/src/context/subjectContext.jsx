
// import React, { createContext, useState, useEffect } from 'react';
// import { getAllSubjects } from '../services/subjectService';

// export const SubjectContext = createContext();

// export const SubjectProvider = ({ children }) => {
//     const [subjects, setSubjects] = useState([]);

//     useEffect(() => {
//         const fetchSubjects = async () => {
//             const data = await getAllSubjects();
//             setSubjects(data);
//         };

//         fetchSubjects();
//     }, []);

//     return (
//         <SubjectContext.Provider value={{ subjects }}>
//             {children}
//         </SubjectContext.Provider>
//     );
// };


// ! This is for dummy data of subjects 

import React, { createContext, useState, useEffect } from 'react';
import subjectImage from '../assets/subjectImage.png';

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
    const temporarySubjects = [
        { _id: '1', name: 'Mathematics', description: "This all are useless subjects", image: subjectImage },
        { _id: '2', name: 'Science', description: "This all are useless subjects", image: subjectImage },
        { _id: '3', name: 'History', description: "This all are useless subjects", image: subjectImage },
        { _id: '4', name: 'Geography', description: "This all are useless subjects", image: subjectImage },
    ];

    const [subjects, setSubjects] = useState(temporarySubjects);

    useEffect(() => {
        // Here you can fetch subjects from an API if needed
        // For now, use temporarySubjects
        setSubjects(temporarySubjects);
    }, []);

    return (
        <SubjectContext.Provider value={{ subjects }}>
            {children}
        </SubjectContext.Provider>
    );
};
