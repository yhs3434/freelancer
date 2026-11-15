/** True for draft values the owner still has to fill in ("20XX", "TODO"). Rendered with data-todo so STRICT=1 npm test catches them. */
export function isPlaceholder(value: string): boolean {
  return /20XX|\bTODO\b/i.test(value);
}
