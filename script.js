const phases = {
    1: {
        tag: "FASE 1 (DIAS 1-4)",
        headline: "Imersão & Setup Estratégico",
        deliverable: "Blueprint do Menu Engenheirado & Persona da IA Definida.",
        avenixActions: [
            "Engenharia de Cardápio com Psicologia de Preços (aumenta ticket médio em até 30%).",
            "UX Design Premium para navegação intuitiva no Menu Digital.",
            "Definição da 'Persona' do Agente IA (tom de voz da marca).",
            "Configuração do ambiente de desenvolvimento e servidores de alta velocidade."
        ],
        clientActions: [
            "Envio de logos, fotos atuais e identidade visual completa.",
            "Lista das 20 perguntas mais frequentes dos clientes (para treino da IA).",
            "Validação do cardápio base: pratos, preços e descrições.",
            "Reunião de Briefing: Visão, Valores e Diferenciais do restaurante."
        ],
        metrics: {
            time: "4 Dias",
            impact: "Fundação",
            impactSub: "(Backoffice)",
            team: "Estrategistas"
        },
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "\"A fundação invisível que sustenta a operação. Planejamento estratégico de alto nível.\""
    },
    2: {
        tag: "FASE 2 (DIAS 5-9)",
        headline: "Desenvolvimento da IA & UX",
        deliverable: "Menu Digital Funcional + Agente IA Integrado ao WhatsApp Business.",
        avenixActions: [
            "Digitalização completa do Menu com fotos otimizadas (zero lentidão).",
            "Configuração do WhatsApp Business com automação de reservas.",
            "Treinamento da IA: Horários, Localização, FAQs e Filtro de Qualificação.",
            "Testes de usabilidade (User Experience) e ajustes finos.",
            "BÓNUS: Design dos Expositores de Mesa (QR Codes prontos para gráfica)."
        ],
        clientActions: [
            "Validação do tom de voz do Agente IA (testes de conversa).",
            "Revisão final de preços e descrições no sistema.",
            "Teste prático: Simulação completa de pedido e reserva.",
            "Aprovação do layout final do Menu Digital."
        ],
        metrics: {
            time: "5 Dias",
            impact: "Crítico",
            impactSub: "(Tecnologia)",
            team: "Dev & IA"
        },
        image: "fase2_ui_final.jpg",
        caption: "\"Tecnologia invisível, resultados visíveis. Atendimento 24/7 sem custo de recepcionista.\""
    },
    3: {
        tag: "FASE 3 (DIAS 10-12)",
        headline: "Produção: Autoridade Máxima",
        deliverable: "Banco Audiovisual de Cinema: 1 Vídeo Institucional + 15 Fotos Premium + 8 Reels.",
        avenixActions: [
            "Shooting Premium: Fotografia gastronômica dos pratos 'Hero' com iluminação de cinema.",
            "Captação de B-Rolls Cinematográficos do ambiente e experiência.",
            "1 Vídeo Manifesto/Institucional (Conceito e Alma da Marca).",
            "Edição profissional com color grading avançado.",
            "BÓNUS EXCLUSIVO: Cobertura da Grande Inauguração (sem custo adicional)."
        ],
        clientActions: [
            "Mise-en-place Impecável: Ambiente preparado para sessão de alto nível.",
            "Chef e equipe uniformizados e disponíveis para filmagem.",
            "Pratos-chave montados com apresentação perfeita.",
            "Agenda livre: Garantir período sem clientes para captação sem interrupções."
        ],
        metrics: {
            time: "3 Dias",
            impact: "Desejo",
            impactSub: "(Branding)",
            team: "Audiovisual"
        },
        image: "fase3_final.jpg?v=99",
        caption: "\"O apetite começa pelos olhos. Qualidade de cinema que transforma curiosos em clientes.\""
    },
    4: {
        tag: "FASE 4 (DIAS 13-15)",
        headline: "Go-Live & Alta Performance",
        deliverable: "Restaurante Operacional com Máquina de Vendas Digital 100% Ativa.",
        avenixActions: [
            "Treinamento Intensivo da Equipe: Como usar Menu Digital e interpretar dados da IA.",
            "Monitoramento em Tempo Real (Primeiras 24h): Suporte técnico prioritário.",
            "Ajustes finais de performance e otimização de velocidade.",
            "Entrega do Painel Administrativo com relatórios de vendas e reservas.",
            "BÓNUS: Setup Google Meu Negócio + TripAdvisor (SEO Local para turistas)."
        ],
        clientActions: [
            "Equipe 100% presente e engajada no treinamento presencial.",
            "Divulgação Oficial: Lançamento coordenado nas redes sociais.",
            "Feedback em tempo real: Reportar qualquer dúvida ou ajuste nas primeiras horas.",
            "Uso ativo: Garantir que o QR Code esteja visível em todas as mesas."
        ],
        metrics: {
            time: "3 Dias",
            impact: "Total",
            impactSub: "(Operação)",
            team: "Customer Success"
        },
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "\"Sua máquina de vendas digital operando em capacidade máxima. Foco na gastronomia, nós cuidamos dos clientes.\""
    }
};

function switchPhase(phaseId) {
    // 1. Update Stepper Tabs
    document.querySelectorAll('.step-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`tab-${phaseId}`).classList.add('active');

    // 2. Get Data
    const data = phases[phaseId];

    // 3. Build HTML Structure for Strategy Card
    const htmlContent = `
        <div class="phase-tag">${data.tag}</div>
        <h2 class="phase-headline">${data.headline}</h2>

        <div class="deliverable-box">
            <div class="check-icon"><i class="fas fa-check"></i></div>
            <div class="deliverable-content">
                <h4>Entregável da Fase</h4>
                <p>${data.deliverable}</p>
            </div>
        </div>

        <div class="actions-grid">
            <div class="action-column">
                <h5><i class="fas fa-circle avenix-dot"></i> Ações AVENIX</h5>
                <ul class="action-list">
                    ${data.avenixActions.map(action =>
        `<li><i class="fas fa-chevron-right"></i> ${action}</li>`
    ).join('')}
                </ul>
            </div>
            <div class="action-column">
                <h5><i class="fas fa-circle client-dot"></i> Ações Cliente</h5>
                <ul class="action-list">
                    ${data.clientActions.map(action =>
        `<li><i class="far fa-circle"></i> ${action}</li>`
    ).join('')}
                </ul>
            </div>
        </div>

        <div class="card-footer">
            <div class="metric-box">
                <span class="metric-label">Tempo Estimado</span>
                <span class="metric-value">${data.metrics.time}</span>
            </div>
            <div class="metric-box">
                <span class="metric-label">Impacto Operacional</span>
                <span class="metric-value" style="color: var(--accent-gold)">${data.metrics.impact}</span>
                <span class="metric-sub">${data.metrics.impactSub}</span>
            </div>
            <div class="metric-box">
                <span class="metric-label">Equipe Envolvida</span>
                <span class="metric-value">${data.metrics.team}</span>
            </div>
        </div>
    `;

    // 4. Inject Content
    const wrapper = document.getElementById('content-wrapper');
    wrapper.style.opacity = '0';
    setTimeout(() => {
        wrapper.innerHTML = htmlContent;
        wrapper.style.opacity = '1';
    }, 200);

    // 5. Update Preview Image
    const imgElement = document.getElementById('preview-image');
    const textElement = document.getElementById('preview-text');

    // Quick fade effect for image
    imgElement.style.opacity = '0';
    setTimeout(() => {
        const newSrc = data.image;
        console.log('Loading image:', newSrc);
        imgElement.src = newSrc;
        imgElement.onload = function () {
            console.log('Image loaded successfully:', newSrc);
            imgElement.style.opacity = '0.8';
        };
        imgElement.onerror = function () {
            console.error('Failed to load image:', newSrc);
        };
        textElement.innerText = data.caption;
    }, 200);
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    switchPhase(1); // Start with Phase 1
});
