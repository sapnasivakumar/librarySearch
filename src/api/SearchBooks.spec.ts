// import fetchBookList  from "./SearchBooks";
// import bookListMock from "../bookListMock";

// beforeEach(() => {
//   fetch.resetMocks();
// });

// it("search books", async () => {
//   fetch.mockResponseOnce(JSON.stringify(bookListMock));

//   const books = await fetchBookList("sample");

//   expect(books).toEqual(books);
//   expect(fetch).toHaveBeenCalledTimes(1);
// });
// it("search books API failure", async () => {
//     fetch.mockReject(new Error('fake error message'));
  
//     const error = await fetchBookList("sample");
//     console.log("****", error.message);
  
//     expect(error.message).toEqual('fake error message');
//     expect(fetch).toHaveBeenCalledTimes(1);
//   });
export {}