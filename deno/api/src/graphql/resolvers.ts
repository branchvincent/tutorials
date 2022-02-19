export const resolvers = {
  Query: {
    getUser: (parent: any, { id }: any, context: any, info: any) => {
      console.log("id", id, context);
      return { firstName: "John", lastName: "Doe" };
    },
  },
  Mutation: {
    setUser: (
      parent: any,
      { input: { firstName, lastName } }: any,
      context: any,
      info: any,
    ) => {
      console.log("input:", firstName, lastName);
      return { done: true };
    },
  },
};
