// ErrorBoundary: minimal error handling for child functions
export function ErrorBoundary({fallback},childFn){try{return childFn()}catch(e){return typeof fallback=="function"?fallback(e):fallback||null}}

// defineComponent: minimal wrapper for functional components
export function defineComponent(fn){return(p={},...c)=>fn(p,...c)}
