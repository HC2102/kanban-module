export const data = [
  {
    id: "1",
    Task: "Create PR for the Task",
    Due_Date: "25-May-2021",
    Tags: [{
      name: "test1",
      color: "red",
    }
    ]
  },
  {
    id: "2",
    Task: "Fix Styling",
    Due_Date: "26-May-2021",
    Tags: [
      {
        name: "test1",
        color: "red",
      },
      {
        name: "test2",
        color: "blue",
      },
    ]
  },
  {
    id: "3",
    Task: "Handle Api Changes",
    Due_Date: "27-May-2021",
    Tags: [
      {
        name: "test1",
        color: "red",
      },
      {
        name: "test2",
        color: "blue",
      },
      {
        name: "test3",
        color: "green",
      }
    ]
  }
]

export const columnsFromBackend = {
  column1: {
    title: "To-do",
    items: data,
  },
  column2: {
    title: "In Progress",
    items: [],
  },
  column3: {
    title: "Done",
    items: [],
  },
}