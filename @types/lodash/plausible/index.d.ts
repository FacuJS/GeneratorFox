type Options = {
    callback?: () => void
    props: Record<string, string | number | undefined>
}

interface Window {
    plausible: (event: string, options?: Options) => void
}