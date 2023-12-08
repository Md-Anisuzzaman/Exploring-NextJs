const { USERNAME, PASSWORD } = process.env
export const connection_link = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.yhzyn.mongodb.net/TEST_DB?retryWrites=true&w=majority`