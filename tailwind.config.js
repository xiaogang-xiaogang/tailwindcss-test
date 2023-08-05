module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}","public/index.html"],
    theme: {
      extend: {},
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px'
      },
      screens: {
        sm: '400px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize: {
        sm: '5px',
        base: '10px',
        xl: '20px',
      },
    },
    plugins: [],
}