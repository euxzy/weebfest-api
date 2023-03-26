function excludeFields<Table, Key extends keyof Table>(
  table: Table,
  keys: Key[]
): Omit<Table, Key> {
  for (const key of keys) {
    delete table[key]
  }
  return table
}

export default excludeFields