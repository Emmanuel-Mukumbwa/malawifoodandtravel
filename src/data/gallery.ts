export interface GalleryItem {
	src: string;
	caption: string;
	category: 'food' | 'activities' | 'landscapes';
}

// Static gallery array. Filenames below were taken from the screenshots you uploaded.
// I assumed `.jpg` for each one because Windows Explorer hides extensions.
const gallery: GalleryItem[] = [
	// Activities
	{
		src: '/images/gallery/activities/hiking.jpg',
		caption: 'Hiking',
		category: 'activities',
	},
	{
		src: '/images/gallery/activities/hiking (2).jpg',
		caption: 'Hiking',
		category: 'activities',
	},
	{
		src: '/images/gallery/activities/hiking (3).jpg',
		caption: 'Hiking',
		category: 'activities',
	},
	{
		src: '/images/gallery/activities/hiking (4).jpg',
		caption: 'Hiking',
		category: 'activities',
	},
	{
		src: '/images/gallery/activities/hiking (5).jpg',
		caption: 'Hiking',
		category: 'activities',
	},
	{
		src: '/images/gallery/activities/hiking (6).jpg',
		caption: 'Hiking',
		category: 'activities',
	},

	// Food
	{
		src: '/images/gallery/food/beef-stew.jpg',
		caption: 'Beef stew',
		category: 'food',
	},
	{
		src: '/images/gallery/food/boiledcorn-and-sweetpotatoes.jpg',
		caption: 'Boiled corn and sweet potatoes',
		category: 'food',
	},
	{
		src: '/images/gallery/food/localchickenstew.jpg',
		caption: 'Local chicken stew',
		category: 'food',
	},
	{
		src: '/images/gallery/food/maungu(boiledpumpkins).jpg',
		caption: 'Maungu',
		category: 'food',
	},
	{
		src: '/images/gallery/food/mixed meal.jpg',
		caption: 'Mixed meal',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-boiledchicken.jpg',
		caption: 'Nsima with boiled chicken',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-chambo-greenvegies.jpg',
		caption: 'Nsima with chambo and green veggies',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-chambo-vegies.jpg',
		caption: 'Nsima with chambo and veggies',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-flyedchambo-vegies.jpg',
		caption: 'Nsima with fried chambo and veggies',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-grilled chicken and localchicken-salad.jpg',
		caption: 'Nsima with grilled chicken and local chicken salad',
		category: 'food',
	},
	{
		src: '/images/gallery/food/nsima-maofoz.jpg',
		caption: 'Nsima with maofoz',
		category: 'food',
	},
	{
		src: '/images/gallery/food/rice-localchicken-vegies.jpg',
		caption: 'Rice with local chicken and veggies',
		category: 'food',
	},
];

export default gallery;