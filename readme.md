# Code example

```javascript
const { cardsManager } = require("your_path/fetch")

/**
 * for fetch all cards
 */
const cards = await cardsManager.fetchCards()

/***
 * for add a new card
 * */
await cardsManager.addNewCard({
	title:"title"
 	description:"description"
 	img:"base64-image"

 })
```
