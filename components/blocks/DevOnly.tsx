import { PropsWithChildren } from "react";

export default function DevOnly({ children }: PropsWithChildren) {
	if (process.env.NODE_ENV === "production") return null;
	return children;
}