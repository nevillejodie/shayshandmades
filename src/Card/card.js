import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    padding: 15
  },
  
}));

export default function ImgMediaCard({alt, img, title, typography, description }) {
  const classes = useStyles();
  const [items, setItems] = useState([{ itemName: "item", quantity: 1, isSelected: false },
  ]);
     

  const [totalItemCount, setTotalItemCount] = useState(6);

  const handleAddButtonClick = () => {
		const newItem = {
			itemName: {typography},
			quantity: 1,
			isSelected: false,
        };
        
        const newItems = [...items, newItem];

		setItems(newItems);
		calculateTotal();
    };

    const calculateTotal = () => {
      const totalItemCount = items.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
  
      setTotalItemCount(totalItemCount);
    };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={alt}
          height="140"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {typography}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <FacebookShareButton
            url="http://www.wickedywax.co.uk/"
            quote="Check out this beaut product from Wickey Wax!"
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <WhatsappShareButton   url="http://www.wickedywax.co.uk/"
            quote="Check out this beaut product from Wickey Wax!"
            className="Demo__some-network__share-button">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <button onClick={() => handleAddButtonClick()}>Add to Basket</button>
      </CardActions>
    </Card>
  );
}