import { Task } from "@lit/task";

type RenderedTask<V> =
	| {
			type: "loading";
	  }
	| {
			type: "error";
			error: Error;
	  }
	| {
			type: "completed";
			value: V;
	  };

export const renderTask = <R, T extends ReadonlyArray<unknown> = readonly []>(
	task: Task<T, R>,
): RenderedTask<R> => {
	return task.render({
		initial: () => ({
			type: "loading" as const,
		}),
		pending: () => ({
			type: "loading" as const,
		}),
		complete: (value) => ({
			type: "completed" as const,
			value,
		}),
		error: (error) => {
			let err: Error;
			if (!(error instanceof Error)) {
				err = new Error("Unknown error occured.");
			} else {
				err = error;
			}

			return {
				type: "error" as const,
				error: err,
			};
		},
	});
};
