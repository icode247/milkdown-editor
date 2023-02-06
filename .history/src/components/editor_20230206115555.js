import React from 'react';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { ReactEditor, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';
import { history } from '@milkdown/plugin-history';
import { upload } from '@milkdown/plugin-upload';
import { clipboard } from '@milkdown/plugin-clipboard';
import { prism } from '@milkdown/plugin-prism';

export const MilkdownEditor = () => {
    const { editor } = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nord)
            .use(commonmark)
            .use(history)
            .use(upload)
            .use(clipboard),
    );

    return <ReactEditor editor={editor} />;
};