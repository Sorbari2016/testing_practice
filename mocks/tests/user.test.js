const {
  greetUser,
  processUser,
  getAppreciation,
  getUser,
  handleSubmit,
  saveUser,
} = require("../scripts/user");

// Mocks help us test callbacks

describe("check callback", () => {
  // create mock function for each test
  let mockCallback;

  beforeEach(() => {
    mockCallback = jest.fn();
  });

  test("calls the callback", function () {
    greetUser("Clematins", mockCallback);

    expect(mockCallback).toHaveBeenCalled();
  });

  test("calls back once", function () {
    greetUser("Clematins", mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  test("passes the correct message to callback", function () {
    greetUser("Clematins", mockCallback);

    expect(mockCallback).toHaveBeenCalledWith("Hello Clematins");
  });

  test("calls onSuccess for valid user", function () {
    const mockOnSuccess = jest.fn();

    const user = {
      name: "Clematins",
      isValid: true,
    };

    processUser(user, mockOnSuccess);

    expect(mockOnSuccess).toHaveBeenCalled();
  });

  // callback not called
  test("does not call onSuccess for invalid user", function () {
    const mockOnSuccess = jest.fn();

    const user = {
      name: "Clematins",
      isValid: false,
    };

    processUser(user, mockOnSuccess);

    expect(mockOnSuccess).not.toHaveBeenCalled();
  });

  // mock returning a value
  test("appreciate user", function () {
    const mockAppreciate = jest.fn();

    mockAppreciate.mockReturnValue("you are doing well!");

    const appreciation = getAppreciation("Clematins", mockAppreciate);

    expect(appreciation).toBe("Clematins you are doing well!");
  });

  // mocking an API-like function
  test("gets the user", function () {
    const mockFetchUser = jest.fn();

    // here we are not depending the actual api-call
    mockFetchUser.mockReturnValue({
      id: 1,
      name: "Clematins",
    });

    const user = getUser(mockFetchUser);

    expect(user).toEqual({
      id: 1,
      name: "Clematins",
    });

    expect(mockFetchUser).toHaveBeenCalled();
  });

  // mocking asynchronous functions
  test("gets user asynchronously", async function () {
    const mockFetchUser = jest.fn();

    mockFetchUser.mockResolvedValue({
      id: 1,
      name: "Clematins",
    });

    const user = await getUser(mockFetchUser);

    expect(user).toEqual({
      id: 1,
      name: "Clematins",
    });
  });

  // simulating or anticipating an error
  test("handles API error", async function () {
    const mockFetchUser = jest.fn();

    mockFetchUser.mockRejectedValue(new Error("Network error"));

    await expect(getUser(mockFetchUser)).rejects.toThrow("Network error");
  });

  // Test successful submission, when data is received
  test("calls onSuccess when data is valid", function () {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    const data = {
      name: "Clematins",
      valid: true,
    };

    handleSubmit(data, onSuccess, onError);

    expect(onSuccess).toHaveBeenCalledWith(data);
    expect(onError).not.toHaveBeenCalled();
  });

  // test failure
  test("calls onError when data is invalid", function () {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    const data = {
      name: "",
      valid: false,
    };

    handleSubmit(data, onSuccess, onError);

    expect(onError).toHaveBeenCalledWith("Invalid data");
    expect(onSuccess).not.toHaveBeenCalled();
  });

  // We also have clearAllMocks() vs resetAllMocks() vs restoreAllMocks() which you can call on jest
  // within beforeEach or afterEach methods
});

// A rather complete example

describe("saveUser()", function () {
  test("calls onSuccess for valid user", function () {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    const user = {
      name: "Clematins",
    };

    saveUser(user, onSuccess, onError);

    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledWith(user);

    expect(onError).not.toHaveBeenCalled();
  });

  test("calls onError when name is missing", function () {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    const user = {
      name: "",
    };

    saveUser(user, onSuccess, onError);

    expect(onError).toHaveBeenCalledTimes(1);
    expect(onError).toHaveBeenCalledWith("Name is required");

    expect(onSuccess).not.toHaveBeenCalled();
  });
});
