import Files from "../components/instructor/Files";

export default {
    title: "Instructor / Files",
    component: Files,
    parameters: {
        layout: "centered",
    },
};

const classFileListing = {
    id: "d6f46cca-7104-11e5-b73c-3c4a92e4a804",
    label: "RNR 355 2024",
    total: 5,
    path: "/iplant/home/shared/chatur/courses/RNR 355 2024",
    files: [
        {
            path: "/iplant/home/shared/chatur/courses/RNR 355 2024/Syllabus.pdf",
            label: "Syllabus.pdf",
            "date-modified": "2024-01-23",
            "file-size": 128000,
        },
        {
            path: "/iplant/home/shared/chatur/courses/RNR 355 2024/Unit1_Lecture.slides",
            label: "Unit1_Lecture.slides",
            "date-modified": "2024-01-23",
            "file-size": 2306867,
        },
        {
            path: "/iplant/home/shared/chatur/courses/RNR 355 2024/Unit2_Lecture.slides",
            label: "Unit2_Lecture.slides",
            "date-modified": "2024-01-23",
            "file-size": 1153433,
        },
        {
            path: "/iplant/home/shared/chatur/courses/RNR 355 2024/Unit3_Lecture.slides",
            label: "Unit3_Lecture.slides",
            "date-modified": "2024-01-23",
            "file-size": 1153433,
        },
        {
            path: "/iplant/home/shared/chatur/courses/RNR 355 2024/Unit4_Lecture.slides",
            label: "Unit4_Lecture.slides",
            "date-modified": "2024-01-23",
            "file-size": 1153433,
        },
    ],
};

export const FilesView = {
    args: {
        classFileListing,
    },
};
