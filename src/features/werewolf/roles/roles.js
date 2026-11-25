// Static role data for WT-002 (no assignment logic).
export const ROLES = [
  {
    id: 'werewolf',
    name: 'Werewolf',
    glyph: '🐺',
    description:
      'Secretly belongs to the wolf team. Blend in with the villagers and avoid being found.',
  },
  {
    id: 'villager',
    name: 'Villager',
    glyph: '🏡',
    description:
      'Takes part in discussion and voting to identify the Werewolf.',
  },
  {
    id: 'seer',
    name: 'Seer',
    glyph: '🔮',
    description:
      'Has a special information-gathering ability to learn about other players.',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    glyph: '🩺',
    description: 'Has a protective ability to keep a player safe.',
  },
];

export const getRole = (id) => ROLES.find((r) => r.id === id) ?? ROLES[0];
