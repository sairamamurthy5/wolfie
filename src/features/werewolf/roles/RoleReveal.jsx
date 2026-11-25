import { useState } from 'react';
import { getRole } from './roles';

/**
 * Shows one assigned SAMPLE role. The role comes from the `roleId` prop
 * (default: 'seer'); nothing is assigned or stored here.
 */
export default function RoleReveal({ roleId = 'seer' }) {
  const [revealed, setRevealed] = useState(false);
  const role = getRole(roleId);

  return (
    <section
      aria-labelledby="wt-reveal-title"
      className="mx-auto max-w-sm text-center text-[#f1ecdc]"
    >
      <h2 id="wt-reveal-title" className="mb-4 text-2xl font-semibold">
        Your role
      </h2>

      <div
        className={
          'flex min-h-56 flex-col items-center justify-center gap-2.5 rounded-2xl bg-[#1f2540] p-6 ' +
          (revealed
            ? 'border-2 border-[#e0793a]'
            : 'border border-dashed border-[#3a4268]')
        }
      >
        {revealed ? (
          <>
            <span className="text-6xl leading-none" aria-hidden="true">
              {role.glyph}
            </span>
            <p className="m-0 text-2xl font-bold" aria-live="polite">
              You are the {role.name}
            </p>
            <p className="m-0 leading-relaxed text-[#b4b8cf]">
              {role.description}
            </p>
          </>
        ) : (
          <p className="m-0 leading-relaxed text-[#b4b8cf]">
            Your role is hidden. Make sure no one else is looking.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="mt-4 cursor-pointer rounded-lg bg-[#f1ecdc] px-5 py-2.5 font-semibold text-[#14182b] hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#e0793a]"
      >
        {revealed ? 'Hide role' : 'Reveal my role'}
      </button>
    </section>
  );
}
