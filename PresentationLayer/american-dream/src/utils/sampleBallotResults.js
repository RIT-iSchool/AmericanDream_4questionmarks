import { ROLE } from "./role";

export const ballotProgress = {
    title: "2023 Union Government Election",
    startdate: "September 10",
    enddate: "October 2",
    voted: [
        {
            id: 0,
            fname: "John",
            lname: "Smith",
            email: "john.smith@gmail.com",
            userType: ROLE.member,
        },
        {
            id: 1,
            fname: "Anoushka",
            lname: "Shenoy",
            email: "anu@gmail.com",
            userType: ROLE.member,
        },
        {
            id: 2,
            fname: "Karina",
            lname: "Kageki-Bonert",
            email: "kkageki@neu.edu",
            userType: ROLE.member,
        },
        {
            id: 3,
            fname: "Riya",
            lname: "Nigudkar",
            email: "riyan2031@calpoly.edu",
            userType: ROLE.officer,
        },
        {
            id: 4,
            fname: "Phoebe",
            lname: "Wong",
            email: "phoebew4519@poly.edu",
            userType: ROLE.member,
        },
    ],
    notVoted: [
        {
            id: 5,
            fname: "Matt",
            lname: "Lynch",
            email: "mlynch@rit.edu",
            userType: ROLE.member,
        },
        {
            id: 6,
            fname: "Kelsey",
            lname: "McCallum",
            email: "kmm@gmail.com",
            userType: ROLE.member,
        },
        {
            id: 7,
            fname: "Valerie",
            lname: "McKenzie",
            email: "vmck@gmail.com",
            userType: ROLE.officer,
        },
    ],
};

export const ballotResults = {
    title: "2023 Union Government Election",
    startdate: "September 10",
    enddate: "October 2",
    offices: [
        {
            id: 1,
            maxVotes: 1,
            title: "President",
            candidates: [
                {
                    percent: 61,
                    candidate: {
                        id: 1,
                        name: "Tammy Hayes",
                        titles: "CDM Smith",
                        description: "Tammy Desc",
                        imagePath: "../assets/test.jpeg",
                    },
                },
                {
                    percent: 20,
                    candidate: {
                        id: 2,
                        name: "Tim Flanagan, S.C.",
                        titles: "SCS Engineers",
                        description: "Tim Desc",
                        imagePath: "./assets/test.jpeg",
                    },
                },
                {
                    percent: 14,
                    candidate: {
                        id: 3,
                        name: "Vita Quinn",
                        titles: "SCS Engineers",
                        description: "Vita Desc",
                        imagePath: "",
                    },
                },
                {
                    percent: 5,
                    writeIn: {
                        name: "Georgie Myers"
                    }
                },
            ],
        },
        {
            id: 2,
            maxVotes: 2,
            title: "Vice President",
            candidates: [
                {
                    percent: 54,
                    candidate: {
                        id: 1,
                        name: "Tammy Hayes",
                        titles: "CDM Smith",
                        description: "Tammy Desc",
                        imagePath: "",
                    },
                },
                {
                    percent: 37,
                    candidate: {
                        id: 2,
                        name: "Tim Flanagan, S.C.",
                        titles: "SCS Engineers",
                        description: "Tim Desc",
                        imagePath: "",
                    },
                },
                {
                    percent: 5,
                    candidate: {
                        id: 3,
                        name: "Vita Quinn",
                        titles: "SCS Engineers",
                        description: "Vita Desc",
                        imagePath: "",
                    },
                },
                {
                    percent: 5,
                    writeIn: {
                        name: "Georgie Myers"
                    }
                },
            ],
        },
    ],
    initiatives: [
        {
            id: 1,
            description: "Initiative 1 desc",
            responses: [
                {
                    id: 1,
                    title: "Yes",
                    percent: 87
                },
                {
                    id: 2,
                    title: "No",
                    percent: 13
                },
            ],
        },
        {
            id: 2,
            description: "Initiative 2 desc",
            responses: [
                {
                    id: 1,
                    title: "Agree",
                    percent: 12
                },
                {
                    id: 2,
                    title: "Disagree",
                    percent: 24
                },
                {
                    id: 3,
                    title: "Pancakes",
                    percent: 64
                },
            ],
        },
    ],
};
