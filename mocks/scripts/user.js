const greetUser = (name, callback) => {
  callback("Hello " + name);
};

const getAppreciation = (name, getFlowers) => {
  const appreciation = getFlowers();

  return name + " " + appreciation;
};

const processUser = (user, onSuccess) => {
  if (user.isValid) {
    onSuccess(user);
  }
};

const getUser = (fetchUser) => {
  return fetchUser();
};

const handleSubmit = (data, onSuccess, onError) => {
  if (data.valid) {
    onSuccess(data);
  } else {
    onError("Invalid data");
  }
};

const saveUser = (user, onSuccess, onError) => {
  if (!user.name) {
    onError("Name is required");
    return;
  }

  onSuccess(user);
};

module.exports = saveUser;

module.exports = {
  greetUser,
  processUser,
  getAppreciation,
  getUser,
  handleSubmit,
  saveUser,
};
