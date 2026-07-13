export const queryMemberCount = async (): Promise<number> => {
	const response = await fetch(
		"https://discord.com/api/v9/invites/An7DjBxWkh?with_counts=true",
	);

	const parsedResponse = await response.json();
	const fetchedCount = parsedResponse.approximate_member_count;

	if (typeof fetchedCount !== "number") {
		throw new TypeError("Expected number for member count.");
	}

	return fetchedCount;
};
