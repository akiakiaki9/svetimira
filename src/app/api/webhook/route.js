import { NextResponse } from 'next/server'

const TOKEN = '8847061473:AAG2HsYkIKsb6VY7GY412urB8OqTyn_OM50'
const SITE_URL = 'https://www.svetimira.uz'

export async function POST(request) {
    try {
        const body = await request.json()
        console.log('📩 Получено сообщение:', JSON.stringify(body, null, 2))

        if (body.message) {
            const chatId = body.message.chat.id
            const text = body.message.text
            const firstName = body.message.from?.first_name || 'Гость'

            console.log(`👤 ${firstName} (${chatId}) написал: ${text}`)

            // Используем HTML вместо Markdown
            const replyText = `
<b>🌹 Цветы мира</b>
<i>Цветы, которые говорят вместо слов</i>

🌸 <b>Каталог:</b> ${SITE_URL}#catalog
📸 <b>Instagram:</b> https://instagram.com/sveti.mira.bukhara
📱 <b>Telegram:</b> https://t.me/svetimira_bot
📞 <b>Телефон:</b> +998 91 444 80 48
📍 <b>Адрес:</b> Бухара, Узбекистан
🕐 <b>Режим работы:</b> Пн-Вс 09:00-0:00

💐 <b>Закажите букет прямо сейчас!</b>
            `

            const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: replyText,
                    parse_mode: 'HTML', // <-- Меняем с Markdown на HTML
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🌸 Смотреть каталог', url: `${SITE_URL}/catalog` }],
                            [{ text: '📸 Instagram', url: 'https://instagram.com/sveti.mira.bukhara' }],
                            [{ text: '📞 Заказать букет', url: `${SITE_URL}/#contact` }]
                        ]
                    }
                })
            })

            const result = await response.json()
            console.log('✅ Ответ Telegram:', JSON.stringify(result, null, 2))

            if (!result.ok) {
                console.error('❌ Ошибка Telegram:', result.description)
            }
        } else {
            console.log('⚠️ Не сообщение, а что-то другое:', body)
        }

        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('❌ Webhook error:', error.message)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: '🌹 Webhook для Цветы мира работает! Отправляйте POST запросы сюда.'
    })
}