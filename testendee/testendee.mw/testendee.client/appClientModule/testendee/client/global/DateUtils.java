package testendee.client.global;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtils {

	/**
	 * Өгөгдсөн огнооны өдрийг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayOfMonth(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.DATE);
	}

	/**
	 * Өгөгдсөн огнооны цагийг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getHour(Date date) {
		SimpleDateFormat sdf = new SimpleDateFormat("HH");
		return Converter.toInt(sdf.format(date));
	}

	/**
	 * Өгөгдсөн огнооны цагийг буцаана (24 цагийн форматаар)
	 * 
	 * @param date
	 * @return
	 */
	public static int getHourOfDay(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.HOUR_OF_DAY);
	}

	/**
	 * Өгөгдсөн огнооны минутыг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getMinute(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.MINUTE);
	}

	/**
	 * Өгөгдсөн огнооны секундыг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getSecond(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.SECOND);
	}

	/**
	 * Өгөгдсөн огноо жилийн хэд дэх өдөр вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayOfYear(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.DAY_OF_YEAR);
	}

	/**
	 * Өгөгдсөн огноо долоо хоногийн хэд дэх өдөр вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayOfWeek(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int day = cal.get(Calendar.DAY_OF_WEEK);
		day--;
		if (day == 0)
			return 7;

		return day;
	}

	/**
	 * Өгөгдсөн он хэдэн хоногтой вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayNumOfYear(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int year = cal.get(Calendar.YEAR);
		int dayNum = 365;
		if (year % 4 == 0)
			dayNum++;
		if (year % 100 == 0)
			dayNum--;
		if (year % 400 == 0)
			dayNum++;

		return dayNum;
	}

	/**
	 * Өгөгдсөн он хэдэн хоногтой вэ?
	 * 
	 * @param year
	 * @return
	 */
	public static int getDayNumOfYear(int year) {
		int dayNum = 365;
		if (year % 4 == 0)
			dayNum++;
		if (year % 100 == 0)
			dayNum--;
		if (year % 400 == 0)
			dayNum++;

		return dayNum;
	}

	/**
	 * Өгөгдсөн сар хэдэн хоногтой вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayNumOfMonth(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int month = cal.get(Calendar.MONTH) + 1;
		int year = cal.get(Calendar.YEAR);

		int[] monthDays = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

		if (year % 4 == 0)
			monthDays[2]++;
		if (year % 100 == 0)
			monthDays[2]--;
		if (year % 400 == 0)
			monthDays[2]++;

		return monthDays[month];
	}

	/**
	 * Өгөгдсөн сар хэдэн хоногтой вэ?
	 * 
	 * @param year
	 * @param month
	 * @return
	 */
	public static int getDayNumOfMonth(int year, int month) {

		int[] monthDays = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };

		if (year % 4 == 0)
			monthDays[2]++;
		if (year % 100 == 0)
			monthDays[2]--;
		if (year % 400 == 0)
			monthDays[2]++;

		return monthDays[month];
	}

	/**
	 * Өгөгдсөн огнооны сарыг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getMonth(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.MONTH) + 1;
	}

	/**
	 * Өгөгдсөн огнооны оныг буцаана
	 * 
	 * @param date
	 * @return
	 */
	public static int getYear(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.YEAR);
	}

	/**
	 * Өгөгдсөн огнооны долоо хоног сарын хэд дэх долоо хоног вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getWeekOfMonth(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.WEEK_OF_MONTH);
	}

	/**
	 * Өгөгдсөн огнооны долоо хоног жилийн хэд дэх долоо хоног вэ?
	 * 
	 * @param date
	 * @return
	 */
	public static int getWeekOfYear(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.WEEK_OF_YEAR);
	}

	/**
	 * Цаг нэмэх
	 * 
	 * @param date
	 * @param hours
	 * @return
	 */
	public static Date addHours(Date date, int hours) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.HOUR, hours);

		return calendar.getTime();
	}

	/**
	 * Минут нэмэх
	 * 
	 * @param date
	 * @param minutes
	 * @return
	 */
	public static Date addMinutes(Date date, int minutes) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MINUTE, minutes);

		return calendar.getTime();
	}

	/**
	 * Секунд нэмэх
	 * 
	 * @param date
	 * @param seconds
	 * @return
	 */
	public static Date addSeconds(Date date, int seconds) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.SECOND, seconds);

		return calendar.getTime();
	}

	/**
	 * Өдөр нэмэх
	 * 
	 * @param date
	 * @param days
	 * @return
	 */
	public static Date addDays(Date date, int days) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.DATE, days);

		return calendar.getTime();
	}

	/**
	 * Сар нэмэх
	 * 
	 * @param date
	 * @param months
	 * @return
	 */
	public static Date addMonths(Date date, int months) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.MONTH, months);

		return calendar.getTime();
	}

	/**
	 * Жил нэмэх
	 * 
	 * @param date
	 * @param years
	 * @return
	 */
	public static Date addYears(Date date, int years) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.YEAR, years);

		return calendar.getTime();
	}

	public static Date trimTime(Date date) {
		return Converter.parseDate(Utils.fillLeft(getYear(date), '0', 4) + "-" + Utils.fillLeft(getMonth(date), '0', 2)
				+ "-" + Utils.fillLeft(getDayOfMonth(date), '0', 2));
	}

	public static int calcAge(Date birthDate) {
		Date now = new Date();
		int y1 = getYear(now);
		int m1 = getMonth(now);
		int d1 = getDayOfMonth(now);

		int y0 = getYear(birthDate);
		int m0 = getMonth(birthDate);
		int d0 = getDayOfMonth(birthDate);

		int age = y1 - y0;
		if (m0 > m1) {
			age--;
		} else if (m0 == m1) {
			if (d0 > d1) {
				age--;
			}
		}

		return age;
	}
}
