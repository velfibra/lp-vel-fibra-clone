'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

type InputProps = {
  children?: React.ReactNode;
  mask?: string;
  error?: boolean;
  multiline?: boolean;
} & React.ComponentPropsWithRef<'input'> &
  React.ComponentPropsWithRef<'textarea'>;

type Input = HTMLInputElement & HTMLTextAreaElement;

export default function TextField({
  children,
  value,
  mask,
  error = false,
  onChange,
  onFocus,
  onBlur,
  multiline = false,
  className,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    rest.autoFocus && setIsFocused(true);
  }, [rest.autoFocus]);

  const shouldShowPlaceholder = value || isFocused || isDirty;

  const attributes = {
    className: clsx(className, 'w-full rounded-md border-none p-2 outline-none'),
    value: mask ? applyMask(mask, value as string) : value,
    onFocus: (event: React.FocusEvent<Input>) => {
      setIsFocused(true);
      onFocus && onFocus(event);
    },
    onBlur: (event: React.FocusEvent<Input>) => {
      setIsFocused(false);
      onBlur && onBlur(event);
    },
    onChange: (event: React.ChangeEvent<Input>) => {
      event.target.value = mask
        ? removeMask(event.target.value.slice(0, mask.length))
        : event.target.value;
      setIsDirty(Boolean(event.target.value));
      onChange && onChange(event);
    },
    ...rest,
  };

  return (
    <div className="relative w-full rounded-md p-0.5">
      <label
        htmlFor={rest.id || rest.name}
        className={clsx(
          'pointer-events-none absolute left-0 transform select-none duration-200',
          shouldShowPlaceholder
            ? clsx(
                'visible top-0 -translate-y-3.5 translate-x-3.5 scale-75',
                error ? 'text-red-700' : 'text-primary',
              )
            : 'translate-x-4 translate-y-1/2 scale-100 text-gray-400',
        )}
      >
        {children}
      </label>
      <div className="group">
        {multiline ? <textarea {...attributes} /> : <input {...attributes} />}
        <fieldset
          className={clsx(
            'pointer-events-none absolute -top-3 bottom-0 left-0 right-0 m-0 rounded-md border px-2 group-hover:border-2',
            error ? 'border-red-700' : 'border-primary',
            shouldShowPlaceholder && 'border-2',
          )}
        >
          <legend
            className={clsx(
              'invisible select-none',
              !shouldShowPlaceholder
                ? 'max-w-0'
                : 'max-w-full px-[10px] max-lg:-ml-[60px] lg:-ml-[118px]',
            )}
          >
            <span className="mx-1 inline-block w-max text-xs">{children}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
}

const applyMask = (mask: string, input: string) => {
  const maskChars = ['(', ')', '-', ' '];
  let result = '';
  const isMaskChar = (char: string) => maskChars.includes(char);
  const inputChars = input.split('');

  for (let i = 0; i < mask.length; i++) {
    if (inputChars.length === 0) return result;
    const char = mask[i];
    if (isMaskChar(char)) {
      result += char;
    } else {
      result += inputChars.shift();
    }
  }
  return result;
};

const removeMask = (input: string) => input.replace(/[\D]/g, '');
