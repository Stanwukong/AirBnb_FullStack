import prisma from '../libs/prismadb';

import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return [];
		}

		const favorites = await prisma.listing.findMany({
			where: {
				id: {
					in: [...(currentUser.favoriteIds || [])]
				}
			}
		});

		const safefavorites = favorites.map(
			(favorite) => ({
				...favorite,
				createdAt: favorite.createdAt.toISOString()
			})
		);

		return safefavorites;

	} catch (error: any) {
		throw new Error(error)
	}
}