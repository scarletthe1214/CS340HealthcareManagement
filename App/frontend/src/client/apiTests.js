import axios from "axios";

const URL = "http://classwork.engr.oregonstate.edu:51555/api/tests"

const formatDate = (dateTime) => (new Date(dateTime).toISOString().split('T')[0])

export const getTests = async () => {
    const response = await axios.get(URL);
    const mappedData = response.data.map(test => ({
        testID: test.testID,
        ...test,
        test_date: formatDate(test.test_date)
    }))
    return mappedData;
}

export const createTest = async (newTest) => {
    const response = await axios.post(URL, newTest);
};

export const editTest = async (test) => {
    const response = await axios.put(URL + `/${test.testID}`, test);
};

export const deleteTest = async (testID) => {
    const response = await axios.delete(URL + `/${testID}`);
};