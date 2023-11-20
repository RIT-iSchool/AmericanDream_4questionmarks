export const sampleBallot = {
    title: "2023 Union Government Election",
    startdate: "September 10",
    enddate: "October 2",
    offices: [
        {
            id: 1,
            maxVotes: 1,
            title: "President",
            writeIn: true,
            candidates: [
                {
                    id: 1,
                    name: "Tammy Hayes",
                    titles: "CDM Smith",
                    description: "Tammy Desc",
                    imagePath: "../assets/test.jpeg"
                },
                {
                    id: 2,
                    name: "Tim Flanagan, S.C.",
                    titles: "SCS Engineers",
                    description: "Tim Desc",
                    imagePath: "./assets/test.jpeg"
                },
                {
                    id: 3,
                    name: "Vita Quinn",
                    titles: "SCS Engineers",
                    description: "Vita Desc",
                    imagePath: ""
                }
            ]
        },
        {
            id: 2,
            maxVotes: 2,
            title: "Vice President",
            writeIn: true,
            candidates: [
                {
                    id: 1,
                    name: "Tammy Hayes",
                    titles: "CDM Smith",
                    description: "Tammy Desc",
                    imagePath: ""
                },
                {
                    id: 2,
                    name: "Tim Flanagan, S.C.",
                    titles: "SCS Engineers",
                    description: "Tim Desc",
                    imagePath: ""
                },
                {
                    id: 3,
                    name: "Vita Quinn",
                    titles: "SCS Engineers",
                    description: "Vita Desc",
                    imagePath: ""
                }
            ]
        }
    ],
    initiatives: [
        {
            id: 1,
            description: "Initiative 1 desc",
            responses: [
                {
                    id: 1,
                    title: "Yes"
                }, 
                {
                    id: 2,
                    title: "No"
                }, 
            ]
        },
        {
            id: 2,
            description: "Initiative 2 desc",
            responses: [
                {
                    id: 1,
                    title: "Agree"
                }, 
                {
                    id: 2,
                    title: "Disagree"
                }, 
                {
                    id: 3,
                    title: "Pancakes"
                }, 
            ]
        }
    ]
}