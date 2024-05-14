import * as React from 'react';
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import BookDetails from './BookDetails';
import fetchBookList from '../api/SearchBooks';
import type {Book} from '../api/SearchBooks';

export default function BooksList() {
    const routeParams = useParams();
    console.log("Listing books search string", routeParams);
    const [bookList, setBookList] =  React.useState<Array<Book>>([])
    const [error, setError] = React.useState<Boolean>(false)

   
    useEffect(() => {
        const bookSearchResponse = fetchBookList(routeParams.searchString);
        bookSearchResponse.then((response) => {
            console.log("!!!!!", response)
            if(typeof(response) === 'string' && response.includes("Error")){
                console.log("Error");
                setError(true);
            } else {
                const books = response;
                setBookList(books);
            }
        });
    }, [routeParams.searchString]);

    function renderResponse(){
        if(error){
            return <div> Search Failed</div>
        } else {
            return (
            <div>
            {bookList.map((book, index) => {
                return <div key={index}> {book.title} </div>
            })}
           
        </div>
            );
        }
    }

return(
    <Box sx={{ flexGrow: 1 }}>
        {renderResponse()}    
    </Box>
);
}