import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "../../app/types";

import useLoginModal from "./useLoginModal";

interface IUseFavorite {
	listingId: string;
	currentUser: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
	const router = useRouter();
	const loginModal = useLoginModal(); 

	const isFavorite = useMemo(() => {
		const list = currentUser?.favoriteIds || [];

		return list.includes(listingId);
	}, [currentUser, listingId]);

	const toggleFavorite = useCallback(async (
		e: React.MouseEvent<HTMLDivElement>
	) => {
		e.stopPropagation();

		console.log({currentUser});
		if (!currentUser) {
			return loginModal.onOpen();
		}

		try {
			let request;

			if (isFavorite) {
				request = () => axios.delete(`/api/favorites/${listingId}`);
			} else {
				request = () => axios.post(`/api/favorites/${listingId}`);
			}

			await request();
			router.refresh();
			toast.success("Success!");
		} catch (error) {
			toast.error('Something went wrong');
		}
	}, [currentUser, isFavorite, listingId, loginModal, router]);

	return {
		isFavorite,
		toggleFavorite
	}
};

export default useFavorite;