export type propsHeader = propsLogoHeader | propsTextHeader

interface BasePropsHeader {
    
}
interface propsLogoHeader extends BasePropsHeader {
    logoPath?: string;
    logoText?: never;
}

interface propsTextHeader extends BasePropsHeader {
    logoPath?: never;
    logoText?: string;
}