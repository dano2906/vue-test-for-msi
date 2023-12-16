<template>
    <div class="w-full h-auto min-h-screen flex flex-col items-center justify-start bg-blue-50/25">
        <header class="w-full h-auto p-3">
            <slot name="header"/>
        </header>
        <div class="w-full h-full grid grid-cols-12">
            <aside class="w-full h-full col-span-12 md:col-span-2 p-4">
                <slot name="aside"/>
            </aside>
            <main class="w-full h-full col-span-12 md:col-span-10 p-4">
                <slot name="content" />
            </main>
        </div>
        <footer class="w-full h-auto p-3">
            <slot name="footer" />
        </footer>
    </div>
</template>