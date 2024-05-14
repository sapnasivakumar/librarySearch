export type Book = {
    title: string;
    publish_year: number[];
    ebook_access: string;
    author_name: string[];
};

const fetchBookList = async (searchString: string | undefined | "") => {
    const url = "https://openlibrary.org/search.json?q="+searchString+"&limit=6";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw Error(response.status+' '+response.statusText);
        }
        const json = await response.json();
        const books = json.docs.map((book: Book) => {
            return {
                title: book.title,
                publish_year: book.publish_year,
                ebook_access: book.ebook_access,
                author_name: book.author_name
            }
        } );
        console.log("%%%%%%", books);
        return books;
       
    }catch(error){
        console.log("error in fetching the booklist", error);
        return error;

    }
};

export default fetchBookList;