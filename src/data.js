export const users = [
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: true,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: false,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: true,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: false,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: true,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: true,
  },
  {
    name: "Chatur",
    username: "@chatur",
    avatar: "/images/llamacactus.png",
    online: false,
  },
];

export const chats = [
  {
    id: "1",
    sender: users[0],
    messages: [
      {
        id: "1",
        content: "Glad I was able to help!",
        timestamp: "Wednesday 9:00am",
        sender: users[0],
      },
      {
        id: "2",
        content: "Hopefully that helps a bit.",
        timestamp: "Wednesday 9:10am",
        sender: "You",
      },
      {
        id: "3",
        timestamp: "Wednesday 11:30am",
        sender: users[0],
        content: "I will send the draft by end of the day.",
      },
      {
        id: "4",
        timestamp: "Wednesday 2:00pm",
        sender: "You",
        content: "Sure, I will be waiting for it.",
      },
      {
        id: "5",
        timestamp: "Wednesday 4:30pm",
        sender: users[0],
        content: "Just a heads up, I am about to send the draft.",
      },
      {
        id: "6",
        content:
          "Thanks Olivia! Almost there. I'll work on making those changes you suggested and will shoot it over.",
        timestamp: "Thursday 10:16am",
        sender: users[0],
      },
      {
        id: "7",
        content:
          "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
        timestamp: "Thursday 11:40am",
        sender: users[0],
      },
      {
        id: "3",
        timestamp: "Thursday 11:40am",
        sender: users[0],
        content: "Exercise requirements.pdf",
        attachment: {
          fileName: "Tech requirements.pdf",
          type: "pdf",
          size: "1.2 MB",
        },
      },
      {
        id: "8",
        timestamp: "Thursday 11:41am",
        sender: "You",
        content: "Awesome! Thanks. I'll look at this today.",
      },
      {
        id: "9",
        timestamp: "Thursday 11:44am",
        sender: users[0],
        content: "No rush though — we still have to wait for Lana's designs.",
      },
      {
        id: "10",
        timestamp: "Today 2:20pm",
        sender: users[0],
        content:
          "Hey Olivia, can you please review the latest design when you can?",
      },
      {
        id: "11",
        timestamp: "Just now",
        sender: "You",
        content: "Sure thing, I'll have a look today. They're looking great!",
      },
    ],
  },
  {
    id: "2",
    sender: users[1],
    messages: [
      {
        id: "1",
        content: "As an AI, I cannot take a vacation.",
        timestamp: "Wednesday 9:00am",
        sender: users[1],
      },
      {
        id: "2",
        content:
          "That sounds like a great idea, Katherine! Any idea where you want to go?",
        timestamp: "Wednesday 9:05am",
        sender: "You",
      },
      {
        id: "3",
        content: "I am considering a trip to the beach.",
        timestamp: "Wednesday 9:30am",
        sender: users[1],
      },
      {
        id: "4",
        content: "The beach sounds perfect this time of year!",
        timestamp: "Wednesday 9:35am",
        sender: "You",
      },
      {
        id: "5",
        content: "Yes, I agree. It will be a much-needed break.",
        timestamp: "Wednesday 10:00am",
        sender: users[1],
      },
      {
        id: "6",
        content: "Make sure to take lots of pictures!",
        timestamp: "Wednesday 10:05am",
        sender: "You",
      },
    ],
  },
  {
    id: "3",
    sender: users[2],
    messages: [
      {
        id: "1",
        content: "Hey!",
        timestamp: "5 mins ago",
        sender: users[2],
        unread: true,
      },
    ],
  },
  {
    id: "4",
    sender: users[3],
    messages: [
      {
        id: "1",
        content:
          "Hey Olivia, I was thinking about doing some home improvement work.",
        timestamp: "Wednesday 9:00am",
        sender: users[3],
      },
      {
        id: "2",
        content:
          "That sounds interesting! What kind of improvements are you considering?",
        timestamp: "Wednesday 9:05am",
        sender: "You",
      },
      {
        id: "3",
        content:
          "I am planning to repaint the walls and replace the old furniture.",
        timestamp: "Wednesday 9:15am",
        sender: users[3],
      },
      {
        id: "4",
        content:
          "That will definitely give your house a fresh look. Do you need help with anything?",
        timestamp: "Wednesday 9:20am",
        sender: "You",
      },
      {
        id: "5",
        content:
          "I might need some help with picking the right paint colors. Can we discuss this over the weekend?",
        timestamp: "Wednesday 9:30am",
        sender: users[3],
      },
    ],
  },

  {
    id: "5",
    sender: users[4],
    messages: [
      {
        id: "1",
        content: "Sup",
        timestamp: "5 mins ago",
        sender: users[4],
        unread: true,
      },
    ],
  },
  {
    id: "6",
    sender: users[5],
    messages: [
      {
        id: "1",
        content: "Heyo",
        timestamp: "5 mins ago",
        sender: "You",
        unread: true,
      },
    ],
  },

  {
    id: "7",
    sender: users[6],
    messages: [
      {
        id: "1",
        content:
          "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
        timestamp: "5 mins ago",
        sender: users[6],
        unread: true,
      },
    ],
  },
];

export const histories = [
  {
    id: "1",
    summary: "Module 1",
    messages: [
      {
        id: "1",
        content: "Why is the sky blue?",
        timestamp: "Wednesday 9:00am",
        sender: "Chatur",
      },
      {
        id: "2",
        content:
          "That sounds interesting! What kind of improvements are you considering?",
        timestamp: "Wednesday 9:05am",
        sender: "You",
      },
      {
        id: "3",
        content:
          "I am planning to repaint the walls and replace the old furniture.",
        timestamp: "Wednesday 9:15am",
        sender: "Chatur",
      },
      {
        id: "4",
        content:
          "That will definitely give your house a fresh look. Do you need help with anything?",
        timestamp: "Wednesday 9:20am",
        sender: "You",
      },
      {
        id: "5",
        content:
          "I might need some help with picking the right paint colors. Can we discuss this over the weekend?",
        timestamp: "Wednesday 9:30am",
        sender: "Chatur",
      },
    ],
  },
  {
    id: "1",
    summary: "Module 2",
    messages: [
      {
        id: "1",
        content: "Why is the sky blue?",
        timestamp: "Wednesday 9:00am",
        sender: "Chatur",
      },
      {
        id: "2",
        content:
          "That sounds interesting! What kind of improvements are you considering?",
        timestamp: "Wednesday 9:05am",
        sender: "You",
      },
      {
        id: "3",
        content:
          "I am planning to repaint the walls and replace the old furniture.",
        timestamp: "Wednesday 9:15am",
        sender: "Chatur",
      },
      {
        id: "4",
        content:
          "That will definitely give your house a fresh look. Do you need help with anything?",
        timestamp: "Wednesday 9:20am",
        sender: "You",
      },
      {
        id: "5",
        content:
          "I might need some help with picking the right paint colors. Can we discuss this over the weekend?",
        timestamp: "Wednesday 9:30am",
        sender: "Chatur",
      },
    ],
  },
];

export const courses = [
  {
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
  },
  {
    id: "9a9871ba-b0a3-4b88-91d9-d8543ceae9b2",
    label: "CSC 335",
    total: 5,
    path: "/iplant/home/shared/chatur/courses/CSC 335",
    files: [
      {
        path: "/iplant/home/shared/chatur/courses/CSC 335/Syllabus.pdf",
        label: "Syllabus.pdf",
        "date-modified": "2024-01-23",
        "file-size": 128000,
      },
      {
        path: "/iplant/home/shared/chatur/courses/CSC 335/CS Unit1_Lecture.slides",
        label: "CS Unit1_Lecture.slides",
        "date-modified": "2024-01-23",
        "file-size": 2306867,
      },
      {
        path: "/iplant/home/shared/chatur/courses/CSC 335/CS Unit2_Lecture.slides",
        label: "CS Unit2_Lecture.slides",
        "date-modified": "2024-01-23",
        "file-size": 1153433,
      },
      {
        path: "/iplant/home/shared/chatur/courses/CSC 335/CS Unit3_Lecture.slides",
        label: "CS Unit3_Lecture.slides",
        "date-modified": "2024-01-23",
        "file-size": 1153433,
      },
      {
        path: "/iplant/home/shared/chatur/courses/CSC 335/CS Unit4_Lecture.slides",
        label: "CS Unit4_Lecture.slides",
        "date-modified": "2024-01-23",
        "file-size": 1153433,
      },
    ],
  },
];
