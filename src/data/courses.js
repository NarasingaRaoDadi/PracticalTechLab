
export const COURSES = {

  "playwright-typescript": {

    id: "playwright-typescript",

    title: "🎭 Playwright with AI",

    subtitle: "TypeScript • AI • MCP Server",

    totalLessons: 30,

    totalProjects: 4,

    modules: [

      {
        id: "preview",

        moduleName: "Preview",

        title: "🟢 FREE PREVIEW",

        subtitle: "Day 1 - Installation",

        course: "Playwright + TypeScript",

        price: "FREE",

        free: true,

        disabled: false,

        payment: false,

        button: "▶ Watch Free Lesson",

        
        route: "/lesson/playwright-typescript/day1",

        continueRoute: "/lesson/playwright-typescript/day1",

        topics: [],

        lessons: ["day1"]

      },

      {
        id: "module1",

        moduleName: "Foundation",

        title: "📦 Module 1 - Foundation",

        subtitle: "Days 2 - 8",

        course: "Playwright + TypeScript",

        price: 499,

        free: false,

        disabled: false,

        payment: true,

        button: "🔓 Unlock Module 1",

        route: "/payment",

        continueRoute:
          "/courses/playwright-typescript/module1",

        topics: [

          "First Test",

          "Locators",

          "Assertions",

          "Complete Website Automation (Part 1)",

          "Complete Website Automation (Part 2)",

          "Complete Website Automation (Part 3)",
          
          "Complete Website Automation (Part 4)",
        ],

        lessons: [

          "day2",

          "day3",

          "day4",

          "day5",

          "day6",

          "day7",

          "day8"

        ]

      },

      {
        id: "module2",

        moduleName: "Framework",

        title: "📦 Module 2 - Framework",

        subtitle: "Days 9 - 16",

        course: "Playwright + TypeScript",

        price: 899,

        free: false,

        disabled: true,

        payment: true,

        button: "🔒 Coming Soon",

        route: "/payment",

        continueRoute:
          "/courses/playwright-typescript/module2",

        topics: [

          "Framework Design",

          "Page Object Model",

          "Fixtures",

          "API Testing",

          "GitHub Actions",

          "Jenkins"

        ],

        lessons: [

          "day9",

          "day10",

          "day11",

          "day12",

          "day13",

          "day14",

          "day15",

          "day16"

        ]

      },

      {
        id: "module3",

        moduleName: "Real Projects",

        title: "📦 Module 3 - Real Projects",

        subtitle: "Days 17 - 24",

        course: "Playwright + TypeScript",

        price: 1299,

        free: false,

        disabled: true,

        payment: true,

        button: "🔒 Coming Soon",

        route: "/payment",

        continueRoute:
          "/courses/playwright-typescript/module3",

        topics: [

          "Banking",

          "E-Commerce",

          "Insurance",

          "Airline",

          "Healthcare"

        ],

        lessons: [

          "day17",

          "day18",

          "day19",

          "day20",

          "day21",

          "day22",

          "day23",

          "day24"

        ]

      },

      {
        id: "module4",

        moduleName: "AI + MCP",

        title: "📦 Module 4 - AI + MCP",

        subtitle: "Days 25 - 30",

        course: "Playwright + TypeScript",

        price: 1899,

        free: false,

        disabled: true,

        payment: true,

        button: "🔒 Coming Soon",

        route: "/payment",

        continueRoute:
          "/courses/playwright-typescript/module4",

        topics: [

          "Cursor AI",

          "Copilot",

          "MCP Server",

          "AI Agents",

          "Prompt Engineering"

        ],

        lessons: [

          "day25",

          "day26",

          "day27",

          "day28",

          "day29",

          "day30"

        ]

      }

    ]

  }

};

export function getModule(courseId, moduleId) {

  const course = COURSES[courseId];

  if (!course) return null;

  return course.modules.find(
    module => module.id === moduleId
  );

}