import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
	const listings = await getFavoriteListings();
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return ( 
		<ClientOnly>
			<EmptyState
				title="Not favorites found"
				subtitle="You have no favorite listings"
			/>
		</ClientOnly>
	 );
	}
 	
	return (
		<ClientOnly>
			<FavoritesClient
				listings={listings}
				currentUser={currentUser}
			/>
		</ClientOnly>
	)
}
 
export default ListingPage;