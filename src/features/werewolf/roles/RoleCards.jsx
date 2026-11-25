import { ROLES } from './roles';

/** Four role information cards. Pass `highlightId` to mark one role. */
export default function RoleCards({ roles = ROLES, highlightId }) {
  return (
    <ul
      aria-label="Classic Wolf Mode roles"
      className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4"
    >
      {roles.map((role) => {
        const active = role.id === highlightId;
        return (
          <li
            key={role.id}
            className={
              'rounded-xl border bg-[#1f2540] p-5 text-[#f1ecdc] ' +
              (active
                ? 'border-[#e0793a] ring-1 ring-[#e0793a]'
                : 'border-[#3a4268]')
            }
          >
            <span className="block text-3xl leading-none" aria-hidden="true">
              {role.glyph}
            </span>
            <h3 className="mb-1.5 mt-3 text-xl font-semibold">{role.name}</h3>
            <p className="m-0 max-w-prose leading-relaxed text-[#b4b8cf]">
              {role.description}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
