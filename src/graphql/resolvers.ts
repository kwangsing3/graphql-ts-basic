import Recipe from '../model/recipe';
export default {
  Query: {
    async recipe(_: unknown, content: {ID: string}) {
      return await Recipe.findById({_id:content.ID});
    },
    async getRecipes(_: unknown, amount: number) {
      return await Recipe.find().sort({createAt: -1}).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(
      _: unknown,
      input: {name: string; description: string} | any
    ) {
      input = input['recipeInput'] // 內容補正
      console.log(JSON.stringify(input))
      const createdRecipt = new Recipe({
        name: input.name,
        description: input.description,
        createAt: new Date().toISOString(),
        thumbsUp: 0,
        thumbsDown: 0,
      });
      //save to mongodb
      const res = await createdRecipt.save();
      console.log(res._id, 'created!');
      return res;
    },
    async deleteRecipe(_: unknown, content: {ID: string}): Promise<number> {
      const wasDeleted = (await Recipe.deleteOne({_id: content.ID}))
        .deletedCount;
      return wasDeleted;
    },
  },
};
