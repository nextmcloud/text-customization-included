(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[34],{219:function(e,t){e.exports=function(e){var t={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},n={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},{begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/}]},r={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},s={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(n,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},a=e.IDENT_RE+"\\s*\\(",i={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_tshort reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",literal:"true false nullptr NULL"},o=[t,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,n];return{aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:i,illegal:"</",contains:o.concat([s,{begin:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:i,contains:["self",t]},{begin:e.IDENT_RE+"::",keywords:i},{variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:i,contains:o.concat([{begin:/\(/,end:/\)/,keywords:i,contains:o.concat(["self"]),relevance:0}]),relevance:0},{className:"function",begin:"("+e.IDENT_RE+"[\\*&\\s]+)+"+a,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:i,illegal:/[^\w\s\*&]/,contains:[{begin:a,returnBegin:!0,contains:[e.TITLE_MODE],relevance:0},{className:"params",begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,r,t,{begin:/\(/,end:/\)/,keywords:i,relevance:0,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,r,t]}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s]},{className:"class",beginKeywords:"class struct",end:/[{;:]/,contains:[{begin:/</,end:/>/,contains:["self"]},e.TITLE_MODE]}]),exports:{preprocessor:s,strings:n,keywords:i}}}}}]);
//# sourceMappingURL=cpp.js.map?v=211c835231ebf1f7dfdf