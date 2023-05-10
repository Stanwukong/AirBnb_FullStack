import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationClient from "./ReservationClient";

const ReservationsPage = async () => {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState
					title="Unauthorized"
					subtitle="You must be logged in to view this page."
				/>
			</ClientOnly>
		);
	}

	const reservations = await getReservations({
		authorId: currentUser.id
	});

	if (reservations.length == 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No reservations"
					subtitle="You have no reservations."
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<ReservationClient
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
}

export default ReservationsPage;