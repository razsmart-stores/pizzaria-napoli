import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the component has mounted on the client.
 * This helps prevent hydration mismatch errors in Next.js when rendering
 * content that depends on browser-specific APIs or state that differs
 * between the server and the client (like theme).
 *
 * @returns {boolean} - Returns `true` once the component has mounted on the client, otherwise `false`.
 */
export function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return mounted;
}
