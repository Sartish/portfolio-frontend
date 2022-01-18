import * as React from 'react';
import { Card, CardContent, Typography, CardActionArea, Button } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import codepic from "../assets/codepic.jpg"
import Image from "next/image"


const WritingCard = () => {
	const classes = useStyles();

	return (
		<ContainerForWritingCards>

			<Card className={classes.card} sx={{ maxWidth: 400 }}>
				<CardContent>
					<Header>Why I decided to become a developer</Header>
					<ImageArticle><Image src={codepic} /></ImageArticle>
					<Date>
						3rd march 2020
					</Date>
					<Text>
						In March 2020 around the first corona wave in Sweden. I started to feel the urgent need for a change. The longing that can be felt in both the mind, body, and soul.
						Why programming? I am still not sure why. I think it is the dream of being able actually to create something out of vivid ideas....
					</Text>
				</CardContent>
				<CardActionArea>
					<Button size="small">Love</Button>
					<Button size="small">Read</Button>
				</CardActionArea>
			</Card>

			<Card className={classes.card} sx={{ maxWidth: 400 }}>
				<CardContent>
					<Header>Why I decided to become a developer</Header>
					<ImageArticle><Image src={codepic} /></ImageArticle>
					<Date>
						3rd march 2020
					</Date>
					<Text>
						In March 2020 around the first corona wave in Sweden. I started to feel the urgent need for a change. The longing that can be felt in both the mind, body, and soul.
						Why programming? I am still not sure why. I think it is the dream of being able actually to create something out of vivid ideas....
					</Text>
				</CardContent>
				<CardActionArea>
					<Button size="small">Love</Button>
					<Button size="small">Read</Button>
				</CardActionArea>
			</Card>

		</ContainerForWritingCards>
	);
}

export default WritingCard

const useStyles = makeStyles({
	card: {
		margin: "80px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		fontFamily: "'Rubik', sans-serif;",
	},
	header: {
		fontFamily: "'Rubik', sans-serif;",
	},

});

const ContainerForWritingCards = styled.div`
display: flex; 
justify-content: center; 
alig-items: center; 
flex-direction: row; 
`

const ImageArticle = styled.div`

text-align: center;
`


const Header = styled.h1`
 font-size: 28px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 2px;
  line-height: 30px;
	padding: 10px;
`

const Date = styled.p`
 	font-size: 12px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1px;
  line-height: 10px;
	padding: 10px;

`

const Text = styled.p`
 	font-size: 18px;
  font-family: "Rubik", sans-serif;
  letter-spacing: 1px;
  line-height: 20px;
	padding: 10px;
`
