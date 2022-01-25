package com.maochd.cloud.common.core.utils.format;

import lombok.SneakyThrows;

import java.nio.charset.StandardCharsets;

public class FormatUtil {

    @SneakyThrows
    public String convertAscii7(String str) {
        return new String(str.getBytes(StandardCharsets.ISO_8859_1), "gbk");
    }
}
