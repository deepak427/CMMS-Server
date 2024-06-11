import account from "../models/account.js";

export const getAllAccounts = async (req, res) => {
  try {
    const accountList = await account.find();
    return res.status(200).json(accountList);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const addAccount = async (req, res) => {
  const { accountCode, accountDescription } = req.body;
  try {
    const existingAccount = await account.findOne({ code: accountCode });
    if (existingAccount) {
      return res.status(403).json({
        message: "already exist",
      });
    }

    const addedAccount = new account({
      code: accountCode,
      description: accountDescription,
    });
    await addedAccount.save();

    return res.status(200).json({
      addedAccount,
    });
  } catch (error) {
    return res.status(409).json("Could't add a new account");
  }
};
