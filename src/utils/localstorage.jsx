const employee = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Site Inspection",
        description: "Inspect foundation work at site",
        date: "2026-03-20",
        category: "Inspection",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Material Check",
        description: "Verify cement and sand quality",
        date: "2026-03-18",
        category: "Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Safety Briefing",
        description: "Conduct worker safety session",
        date: "2026-03-22",
        category: "Safety",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Blueprint Review",
        description: "Analyze structural drawings",
        date: "2026-03-21",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Concrete Pouring",
        description: "Supervise slab concrete work",
        date: "2026-03-19",
        category: "Execution",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Meeting",
        description: "Discuss daily progress",
        date: "2026-03-17",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Equipment Check",
        description: "Inspect machinery condition",
        date: "2026-03-23",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Scaffolding Setup",
        description: "Ensure proper scaffolding installation",
        date: "2026-03-20",
        category: "Setup",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Electrical Planning",
        description: "Plan wiring layout",
        date: "2026-03-22",
        category: "Electrical",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Safety Audit",
        description: "Audit site safety measures",
        date: "2026-03-18",
        category: "Safety",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Plumbing Layout",
        description: "Design pipe structure",
        date: "2026-03-23",
        category: "Plumbing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstname: "Vikram",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Brickwork Supervision",
        description: "Monitor wall construction",
        date: "2026-03-21",
        category: "Construction",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Curing Process",
        description: "Ensure proper curing of concrete",
        date: "2026-03-19",
        category: "Quality",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Labor Management",
        description: "Assign daily tasks to workers",
        date: "2026-03-20",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Inventory Check",
        description: "Check material stock",
        date: "2026-03-23",
        category: "Inventory",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Project Planning",
        description: "Prepare construction schedule",
        date: "2026-03-18",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Client Visit",
        description: "Show site progress to client",
        date: "2026-03-22",
        category: "Client",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Budget Review",
        description: "Analyze project expenses",
        date: "2026-03-20",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Final Inspection",
        description: "Inspect completed structure",
        date: "2026-03-23",
        category: "Inspection",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Worker Training",
        description: "Train workers on safety rules",
        date: "2026-03-21",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstname: "Rohit",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem("employee", JSON.stringify(employee))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employee"))
    const admins = JSON.parse(localStorage.getItem("admin"))
    console.log(employees)
    console.log(admins)

    return { employees, admins }
}
