import * as React from 'react';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate, useParams} from "react-router-dom";

type BookDetailsProps = {
    title: String,
    publishDate: String,
    authorName: String
}

export default function BookDetails (props: BookDetailsProps) {
    const routeParams = useParams();
    console.log("book details component", routeParams);

    const navigate = useNavigate();
    const handleClick = (selectedBook: String) => {
        navigate('/bookdetail/'+selectedBook);
    }

    return(
        <div> book details
            <Paper
                component="form"
                sx={{px: 2,py: 2, display: 'flex', alignItems: 'center', width: 400}}
            >
                <div>{props.title}</div>
                <div>{props.authorName}</div>
                <div>{props.title}</div>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search"   onClick={() => {
                    alert(routeParams.selectedBook);
                    // handleClick(routeParams.selectedBook);
                }} >
                    <SearchIcon />
                </IconButton>
            </Paper>

        </div>

    )

}