package testendee.client.global;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.ThreadContext;

public class FileLogger {

	private final static Logger logger = LogManager.getLogger(FileLogger.class);

	public static void debug(String fileName, String log) {
		log(Level.DEBUG, fileName, log, null);
	}

	public static void debug(Class<?> cls, String log) {
		log(Level.DEBUG, cls.getName(), log, null);
	}

	public static void warn(String fileName, String log) {
		log(Level.WARN, fileName, log, null);
	}

	public static void warn(Class<?> cls, String log) {
		log(Level.WARN, cls.getName(), log, null);
	}

	public static void error(String fileName, String log) {
		log(Level.ERROR, fileName, log, null);
	}

	public static void error(Class<?> cls, String log) {
		log(Level.ERROR, cls.getName(), log, null);
	}

	public static void info(String fileName, String log) {
		log(Level.INFO, fileName, log, null);
	}

	public static void info(Class<?> cls, String log) {
		log(Level.INFO, cls.getName(), log, null);
	}

	public static void debug(String fileName, String log, Exception e) {
		log(Level.DEBUG, fileName, log, e);
	}

	public static void debug(Class<?> cls, String log, Exception e) {
		log(Level.DEBUG, cls.getName(), log, e);
	}

	public static void warn(String fileName, String log, Exception e) {
		log(Level.WARN, fileName, log, e);
	}

	public static void warn(Class<?> cls, String log, Exception e) {
		log(Level.WARN, cls.getName(), log, e);
	}

	public static void error(String fileName, String log, Exception e) {
		log(Level.ERROR, fileName, log, e);
	}

	public static void error(Class<?> cls, String log, Exception e) {
		log(Level.ERROR, cls.getName(), log, e);
	}

	public static void info(String fileName, String log, Exception e) {
		log(Level.INFO, fileName, log, e);
	}

	public static void info(Class<?> cls, String log, Exception e) {
		log(Level.INFO, cls.getName(), log, e);
	}

	@SuppressWarnings("unused")
	private static void log(Level level, String fileName, String log, Exception e) {

		System.setProperty("Log4jContextSelector", "org.apache.logging.log4j.core.async.AsyncLoggerContextSelector");

		String logPrefix = "";
		if (level == Level.ERROR) {
			logPrefix = "9_err";
		} else if (level == Level.WARN) {
			logPrefix = "7_warn";
		} else if (level == Level.DEBUG) {
			logPrefix = "0_debug";
		} else {
			logPrefix = "1_info";
		}

		String day = new SimpleDateFormat("yyyyMMdd").format(new Date());
		String logPath = Utils.getServerBinDir() + File.separator + "logs" + File.separator + day + "_"
				+ Utils.getProcId();
		File dir = new File(logPath);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		String logFile = logPath + File.separator + logPrefix + "_" + fileName;

		log = String.format(" [%s] ", Thread.currentThread().getId()) + Utils.newLine() + log;

		ThreadContext.put("logName", logFile);
		if (e != null) {
			if (log != null) {
				log = log + Utils.newLine() + Utils.getExceptionTrace(e);
			} else {
				log = Utils.getExceptionTrace(e);
			}
		}
		logger.log(level, log);
	}

}