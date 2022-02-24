package com.maochd.cloud.common.core.utils.file;

import lombok.SneakyThrows;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class FileUtil {

    /**
     * 单个multipartFile转换成File
     *
     * @param multipartFile multipartFile
     * @return file
     */
    @SneakyThrows
    public static File multipartFileToFile(MultipartFile multipartFile) {
        String[] filename = Objects.requireNonNull(multipartFile.getOriginalFilename()).split("\\.");
        // 获取文件名
        File file = File.createTempFile(filename[0], "." + filename[1]);
        multipartFile.transferTo(file);
        return file;
    }

    /**
     * 批量multipartFile转换成File
     *
     * @param multipartFiles multipartFile数组
     * @return files
     */
    @SneakyThrows
    public static List<File> batchMultipartFileToFile(MultipartFile[] multipartFiles) {
        List<File> files = new ArrayList<>();
        for (MultipartFile multipartFile : multipartFiles) {
            String[] filename = Objects.requireNonNull(multipartFile.getOriginalFilename()).split("\\.");
            // 获取文件名
            File file = File.createTempFile(filename[0], "." + filename[1]);
            multipartFile.transferTo(file);
            files.add(file);
        }
        return files;
    }
}
